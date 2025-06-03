# Ducati Strategy Map - 3D Interactive Visualization

A stunning 3D interactive visualization of Ducati's strategic initiatives, built with Three.js and TypeScript.

## 🚀 Live Demo

View the live visualization at: **[https://ducati-3d-strategy-map.vercel.app/](https://ducati-3d-strategy-map.vercel.app/)**

## Features

- **3D Force-Directed Graph**: Dynamic node layout with physics simulation
- **Interactive Navigation**: Click and drag to rotate, scroll to zoom
- **Smart Tooltips**: Hover over nodes to see detailed evidence and connections
- **Goal Filtering**: Filter view by strategic goals using the legend
- **Smooth Animations**: Camera transitions and particle effects
- **Responsive Design**: Works on desktop and mobile devices

## Architecture

### Core Components

- **Central Node**: "World of Ducati" - Core Value Proposition
- **5 Strategic Goals**: 
  - Performance Edge (Red)
  - Racing Programme (Blue)
  - Brand Ecosystem (Green)
  - Operational Model (Orange)
  - Growth Options (Brown)
- **21 Initiatives**: Connected to relevant strategic goals

### Technology Stack

- **Three.js**: 3D graphics rendering
- **three-forcegraph**: Force-directed graph layout
- **troika-three-text**: High-quality text rendering
- **GSAP**: Smooth animations
- **TypeScript**: Type safety
- **Vite**: Fast build tool

## Development

### Prerequisites

- Node.js 16+
- npm 7+

### Installation

```bash
npm install
```

### Running Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Navigation

- **Rotate**: Click and drag
- **Zoom**: Scroll wheel
- **Focus**: Click on any node to zoom in
- **Filter**: Click legend items to filter by goal

### Understanding the Visualization

1. **Node Size**: Represents hierarchy (Core > Goals > Initiatives)
2. **Node Color**: Goals have unique colors, initiatives are white
3. **Connections**: Lines show relationships between elements
4. **Particles**: Flowing particles indicate active connections

## Data Structure

The visualization data is stored in `src/data.ts` with:

- Node definitions (id, type, color, evidence)
- Link definitions (source, target relationships)
- Evidence strings from the Ducati case study

## Customization

### Modifying Data

Edit `src/data.ts` to:
- Add/remove nodes
- Update connections
- Change evidence text

### Styling

Edit `src/style.css` to:
- Adjust colors and themes
- Modify UI elements
- Change typography

### 3D Settings

Edit `src/main.ts` to:
- Adjust force simulation parameters
- Change node sizes
- Modify animation speeds

## Performance Optimization

- Optimized geometry segments (16x16 spheres)
- Efficient material reuse
- Frustum culling enabled
- Minimal pixel ratio for performance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is for educational purposes. 