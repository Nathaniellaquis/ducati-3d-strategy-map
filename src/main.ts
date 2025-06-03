import './style.css'
import * as THREE from 'three'
import ForceGraph3D from '3d-force-graph'
// @ts-ignore
import { Text } from 'troika-three-text'
import { gsap } from 'gsap'
import { graphData } from './data'
import type { Node, Link } from './data'

// Scene setup
const container = document.getElementById('graph-container')!

// Create force graph
const Graph = (ForceGraph3D as any)()(container)
  .graphData(graphData)
  .nodeAutoColorBy('type')
  .nodeVal((node: any) => {
    const n = node as Node
    if (n.type === 'core') return 25
    if (n.type === 'goal') return 20
    return 15
  })
  .nodeColor((node: any) => {
    const n = node as Node
    if (n.type === 'core') return '#dddddd'
    if (n.type === 'goal') return n.color || '#888888'
    return '#ffffff'
  })
  .nodeOpacity(0.9)
  .linkWidth(0.5)
  .linkOpacity(0.4)
  .linkColor(() => '#666666')
  .linkDirectionalParticles(2)
  .linkDirectionalParticleWidth(1.5)
  .linkDirectionalParticleColor(() => '#e15759')
  .linkDirectionalParticleSpeed(0.006)
  .enableNodeDrag(false)
  .onNodeClick(handleNodeClick)
  .onNodeHover(handleNodeHover)

// Configure camera
Graph.cameraPosition({ x: 0, y: 0, z: 500 })
Graph.controls().enableDamping = true
Graph.controls().dampingFactor = 0.05
Graph.controls().rotateSpeed = 0.5

// Force simulation settings
const forceCharge = Graph.d3Force('charge')
if (forceCharge && typeof forceCharge.strength === 'function') {
  forceCharge.strength(-300)
}

const forceLink = Graph.d3Force('link')
if (forceLink && typeof forceLink.distance === 'function') {
  forceLink.distance(80)
}

const forceCenter = Graph.d3Force('center')
if (forceCenter && typeof forceCenter.strength === 'function') {
  forceCenter.strength(0.5)
}

// Pin the core node at center
setTimeout(() => {
  const coreNode = graphData.nodes.find(n => n.type === 'core')
  if (coreNode) {
    (coreNode as any).fx = 0;
    (coreNode as any).fy = 0;
    (coreNode as any).fz = 0;
  }
  Graph.refresh()
}, 100)

// Custom node rendering with text labels
Graph.nodeThreeObject((node: any) => {
  const n = node as Node
  const group = new THREE.Group()

  // Sphere
  const geometry = new THREE.SphereGeometry(
    n.type === 'core' ? 15 : n.type === 'goal' ? 12 : 8,
    16,
    16
  )

  const material = new THREE.MeshPhongMaterial({
    color: n.type === 'core' ? 0xdddddd : n.type === 'goal' ? n.color : 0xffffff,
    emissive: n.type === 'goal' ? n.color : 0x000000,
    emissiveIntensity: 0.2,
    shininess: 100,
    specular: 0x222222
  })

  const sphere = new THREE.Mesh(geometry, material)
  sphere.userData = { node: n }
  group.add(sphere)

  // Text label
  const text = new Text()
  text.text = n.id.replace(/\n/g, ' ')
  text.fontSize = n.type === 'core' ? 5 : n.type === 'goal' ? 4 : 3
  text.color = 0xffffff
  text.anchorX = 'center'
  text.anchorY = 'middle'
  text.position.y = n.type === 'core' ? 25 : n.type === 'goal' ? 20 : 15
  text.outlineWidth = '5%'
  text.outlineColor = 0x000000

  group.add(text)

  return group
})

// Tooltip handling
const tooltip = document.getElementById('tooltip')!
const tooltipTitle = document.getElementById('tooltip-title')!
const tooltipType = document.getElementById('tooltip-type')!
const tooltipEvidence = document.getElementById('tooltip-evidence')!

let hoveredNode: Node | null = null

function handleNodeHover(node: any) {
  hoveredNode = node as Node | null

  if (hoveredNode) {
    // Show tooltip
    tooltip.classList.remove('hidden')
    updateTooltipPosition()

    // Highlight connected nodes
    const connectedNodeIds = new Set<string>()
    connectedNodeIds.add(hoveredNode.id)

    graphData.links.forEach(link => {
      if (link.source === hoveredNode!.id) {
        connectedNodeIds.add(link.target)
      }
      if (link.target === hoveredNode!.id) {
        connectedNodeIds.add(link.source)
      }
    })

    // Dim unconnected nodes
    Graph.nodeColor((n: any) => {
      const node = n as Node
      if (!connectedNodeIds.has(node.id)) {
        return '#333333'
      }
      if (node.type === 'core') return '#dddddd'
      if (node.type === 'goal') return node.color || '#888888'
      return '#ffffff'
    })

    // Highlight connected links
    Graph.linkOpacity((link: any) => {
      const l = link as Link
      if (l.source === hoveredNode!.id || l.target === hoveredNode!.id) {
        return 0.8
      }
      return 0.1
    })
  } else {
    // Hide tooltip
    tooltip.classList.add('hidden')

    // Reset colors
    Graph.nodeColor((node: any) => {
      const n = node as Node
      if (n.type === 'core') return '#dddddd'
      if (n.type === 'goal') return n.color || '#888888'
      return '#ffffff'
    })

    Graph.linkOpacity(0.4)
  }
}

function updateTooltipPosition() {
  if (!hoveredNode) return

  const vector = new THREE.Vector3()
  const nodePos = (hoveredNode as any)
  if (nodePos.x !== undefined) {
    vector.set(nodePos.x, nodePos.y, nodePos.z)

    // Project to screen coordinates
    const canvas = Graph.renderer().domElement
    const camera = Graph.camera()
    vector.project(camera)

    const x = (vector.x * 0.5 + 0.5) * canvas.clientWidth
    const y = (-vector.y * 0.5 + 0.5) * canvas.clientHeight

    tooltip.style.left = `${x + 20}px`
    tooltip.style.top = `${y - 20}px`

    // Update content
    tooltipTitle.textContent = hoveredNode.id.replace(/\n/g, ' ')
    tooltipType.textContent = hoveredNode.type.toUpperCase()

    if (hoveredNode.evidence) {
      tooltipEvidence.style.display = 'block'
      tooltipEvidence.textContent = hoveredNode.evidence
    } else {
      tooltipEvidence.style.display = 'none'
    }
  }
}

// Animate tooltip position on render
Graph.onEngineFrame(() => {
  if (hoveredNode) {
    updateTooltipPosition()
  }
})

// Handle node clicks
function handleNodeClick(node: any) {
  const n = node as Node

  // Smooth camera transition to focus on node
  const distance = n.type === 'core' ? 200 : n.type === 'goal' ? 150 : 100
  const nodePos = node as any

  if (nodePos.x !== undefined) {
    const targetPos = {
      x: nodePos.x * 1.5,
      y: nodePos.y * 1.5,
      z: nodePos.z + distance
    }

    gsap.to(Graph.cameraPosition(), {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        Graph.cameraPosition(Graph.cameraPosition())
      }
    })
  }
}

// Legend functionality
const legendItems = document.querySelectorAll('.legend-item')
let activeFilter: string | null = null

legendItems.forEach(item => {
  item.addEventListener('click', () => {
    const goal = item.getAttribute('data-goal')

    // Update active state
    legendItems.forEach(i => i.classList.remove('active'))

    if (activeFilter === goal) {
      // Deactivate filter
      activeFilter = null
      showAllNodes()
    } else {
      // Activate filter
      activeFilter = goal
      item.classList.add('active')

      if (goal === 'all') {
        showAllNodes()
      } else {
        filterByGoal(goal!)
      }
    }
  })
})

function showAllNodes() {
  Graph.nodeOpacity(0.9)
  Graph.linkOpacity(0.4)
  activeFilter = null
}

function filterByGoal(goalId: string) {
  // Find all nodes connected to this goal
  const connectedNodeIds = new Set<string>()
  connectedNodeIds.add(goalId)
  connectedNodeIds.add("World of Ducati\n(Core Value Proposition)")

  graphData.links.forEach(link => {
    if (link.source === goalId || link.target === goalId) {
      connectedNodeIds.add(link.source)
      connectedNodeIds.add(link.target)
    }
  })

  // Update visibility
  Graph.nodeOpacity((node: any) => {
    const n = node as Node
    return connectedNodeIds.has(n.id) ? 0.9 : 0.1
  })

  Graph.linkOpacity((link: any) => {
    const l = link as Link
    return (connectedNodeIds.has(l.source) && connectedNodeIds.has(l.target)) ? 0.4 : 0.05
  })
}

// Handle window resize
window.addEventListener('resize', () => {
  Graph.width(container.clientWidth)
  Graph.height(container.clientHeight)
})

// Add some ambient animation
let time = 0
Graph.onEngineFrame(() => {
  time += 0.001

  // Gentle rotation of the entire scene
  if (!Graph.controls().enabled) {
    Graph.scene().rotation.y = Math.sin(time) * 0.1
  }
})

// Initial animation
setTimeout(() => {
  gsap.from(Graph.cameraPosition(), {
    z: 1000,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      Graph.cameraPosition(Graph.cameraPosition())
    }
  })
}, 500)
