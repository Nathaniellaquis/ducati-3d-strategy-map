export interface Node {
    id: string;
    type: 'core' | 'goal' | 'initiative' | 'result';
    color?: string;
    evidence?: string;
}

export interface Link {
    source: string;
    target: string;
}

export interface GraphData {
    nodes: Node[];
    links: Link[];
}

export const graphData: GraphData = {
    nodes: [
        // Core node
        {
            id: "World of Ducati\n(Core Value Proposition)",
            type: "core"
        },
        // Goal nodes
        {
            id: "Performance\nEdge",
            type: "goal",
            color: "#e15759"
        },
        {
            id: "Racing\nProgramme",
            type: "goal",
            color: "#4e79a7"
        },
        {
            id: "Brand\nEcosystem",
            type: "goal",
            color: "#59a14f"
        },
        {
            id: "Operational\nModel",
            type: "goal",
            color: "#f28e2b"
        },
        {
            id: "Growth\nOptions",
            type: "goal",
            color: "#9c755f"
        },
        // Result nodes
        {
            id: "Price Premium\n30%+ vs. peers",
            type: "result",
            color: "#e15759",
            evidence: "Ducati's average family-level premium ranged from 31% to 33% (Exhibit 11)"
        },
        {
            id: "Sport-bike share\n4% → 6.7%",
            type: "result",
            color: "#e15759",
            evidence: "World share of Ducati in its \"relevant market\" rose from 4% (1996) to 6.7% (2000) – Exhibit 3"
        },
        {
            id: "27% cite racing\n#1 factor",
            type: "result",
            color: "#4e79a7",
            evidence: "In a US survey, 27% of current Ducati owners selected racing presence as their primary purchase reason (p. 11)"
        },
        {
            id: "Racing revenue\n€7.9m (2000)",
            type: "result",
            color: "#4e79a7",
            evidence: "Racing division spend €10.2m, revenue €7.9m in 2000 (p. 11)"
        },
        {
            id: "Repeat-purchase\nintent 55%",
            type: "result",
            color: "#59a14f",
            evidence: "European brand–loyalty survey: ~55% repeat intention (Exhibit 16)"
        },
        {
            id: "Accessories/Apparel\n≈7% of revenue",
            type: "result",
            color: "#59a14f",
            evidence: "Related-product line grew from 2%→6.9% of sales 1996-2000 (Exhibit 12)"
        },
        {
            id: "Materials cost\n-12 p.p.",
            type: "result",
            color: "#f28e2b",
            evidence: "Motorcycle-materials cost fell from 55.8% to 43.4% of sales (-12.4 pp) 1996-2000 (Exhibit 12)"
        },
        {
            id: "Units per worker\ndoubled",
            type: "result",
            color: "#f28e2b",
            evidence: "Number of motorcycles produced per worker increased 2× after standardisation (p. 10)"
        },
        {
            id: "EBITDA margin\n17% → 20% target",
            type: "result",
            color: "#9c755f",
            evidence: "2000 EBITDA €60m on €379m rev. ≈ 17%; Minoli's explicit target = Harley's ~20% margin (p. 7 & Exhibit 1)"
        },
        {
            id: "Revenues x4\n('96–'00)",
            type: "result",
            color: "#9c755f",
            evidence: "Revenues quadrupled 1996 (€95m) → 2000 (€379m) – Exhibit 1 & p. 1"
        },
        // Initiative nodes
        {
            id: "World-Superbike\nWins",
            type: "initiative",
            evidence: "9 manufacturer titles 1990-2000 [Exh 6]"
        },
        {
            id: "Open Paddock\n(Fan Access)",
            type: "initiative",
            evidence: "\"Open paddock\" fan zone; 27% of U.S. buyers cite racing presence [p 11]"
        },
        {
            id: "Tech Transfer\n(Track→Road)",
            type: "initiative",
            evidence: "996 R race tech migrated to road models [p 12]"
        },
        {
            id: "R&D + Desmo\n(HPE JV)",
            type: "initiative",
            evidence: "Ferrari–HPE joint venture; R&D spend 3.7% of sales [p 10]"
        },
        {
            id: "Product\nStandardisation",
            type: "initiative",
            evidence: "Only 2 crankcases + 3 heads for full line [Exh 13]"
        },
        {
            id: "Lean / JIT\nDistrict",
            type: "initiative",
            evidence: "Emilia district + Japanese JIT methods [p 9]"
        },
        {
            id: "87-90 % Outsourcing",
            type: "initiative",
            evidence: "Outsourced value 87% in 2001, target 90% [Exh 12]"
        },
        {
            id: "Supplier\nRationalisation",
            type: "initiative",
            evidence: "Supplier base cut 200 → 130; dual-sourcing [p 10]"
        },
        {
            id: "Ducati Stores",
            type: "initiative",
            evidence: "36 mono-brand stores (IT); NYC, London, Sydney roll-out [Exh 14]"
        },
        {
            id: "Accessories &\nApparel",
            type: "initiative",
            evidence: "Revenue share 2% → ≈ 7% 1996-2000 (target 12%) [Exh 12]"
        },
        {
            id: "Museum &\nTours",
            type: "initiative",
            evidence: "10k visitors/yr; symbol of \"mechanics→entertainment\" shift [p 8]"
        },
        {
            id: "World Ducati\nWeekend",
            type: "initiative",
            evidence: "23k attendees in 2000 [p 12]"
        },
        {
            id: "Owners Clubs\n(DOC)",
            type: "initiative",
            evidence: "400+ global clubs [p 12]"
        },
        {
            id: "Ducati.com",
            type: "initiative",
            evidence: "MH 900 E sold 2,000 units online in 10 days; 500k hits/mo [p 13]"
        },
        {
            id: "Advertising &\nCo-Marketing",
            type: "initiative",
            evidence: "\"Ducati/People\" campaign; DKNY & Harrods tie-ins [p 11]"
        },
        {
            id: "Sponsor / Engine\nSales",
            type: "initiative",
            evidence: "Racing revenues €7.9m in 2000 (vs 0 in 1996) [p 11]"
        },
        {
            id: "Limited-Edition\nOnline Models",
            type: "initiative",
            evidence: "MH 900 E & 996 R sold exclusively online [p 13]"
        },
        {
            id: "Product-Line\nBroadening",
            type: "initiative",
            evidence: "Unit output 12k → 39k (1996-2000); 4 families [Exh 8]"
        },
        {
            id: "Planned Cruiser\nEntry",
            type: "initiative",
            evidence: "Ducati-style cruiser to tap 400k-unit segment [p 14]"
        },
        {
            id: "Subsidiary\nExpansion",
            type: "initiative",
            evidence: "Wholly-owned sales cos. in JP, FR, DE, UK, NL [Exh 14]"
        },
        {
            id: "Community-Led\nMarketing",
            type: "initiative",
            evidence: "Clubs, events, polls drive product & upsell [p 12-13]"
        }
    ],
    links: [
        // Core to Goals
        { source: "World of Ducati\n(Core Value Proposition)", target: "Performance\nEdge" },
        { source: "World of Ducati\n(Core Value Proposition)", target: "Racing\nProgramme" },
        { source: "World of Ducati\n(Core Value Proposition)", target: "Brand\nEcosystem" },
        { source: "World of Ducati\n(Core Value Proposition)", target: "Operational\nModel" },
        { source: "World of Ducati\n(Core Value Proposition)", target: "Growth\nOptions" },

        // Initiatives to Goals
        { source: "World-Superbike\nWins", target: "Racing\nProgramme" },
        { source: "World-Superbike\nWins", target: "Performance\nEdge" },
        { source: "World-Superbike\nWins", target: "Brand\nEcosystem" },
        { source: "World-Superbike\nWins", target: "Growth\nOptions" },

        { source: "Open Paddock\n(Fan Access)", target: "Racing\nProgramme" },
        { source: "Open Paddock\n(Fan Access)", target: "Brand\nEcosystem" },
        { source: "Open Paddock\n(Fan Access)", target: "Growth\nOptions" },

        { source: "Tech Transfer\n(Track→Road)", target: "Performance\nEdge" },
        { source: "Tech Transfer\n(Track→Road)", target: "Racing\nProgramme" },
        { source: "Tech Transfer\n(Track→Road)", target: "Growth\nOptions" },

        { source: "R&D + Desmo\n(HPE JV)", target: "Performance\nEdge" },

        { source: "Product\nStandardisation", target: "Operational\nModel" },
        { source: "Product\nStandardisation", target: "Performance\nEdge" },

        { source: "Lean / JIT\nDistrict", target: "Operational\nModel" },
        { source: "Lean / JIT\nDistrict", target: "Performance\nEdge" },

        { source: "87-90 % Outsourcing", target: "Operational\nModel" },
        { source: "87-90 % Outsourcing", target: "Growth\nOptions" },

        { source: "Supplier\nRationalisation", target: "Operational\nModel" },

        { source: "Ducati Stores", target: "Brand\nEcosystem" },
        { source: "Ducati Stores", target: "Growth\nOptions" },

        { source: "Accessories &\nApparel", target: "Brand\nEcosystem" },
        { source: "Accessories &\nApparel", target: "Growth\nOptions" },

        { source: "Museum &\nTours", target: "Brand\nEcosystem" },
        { source: "Museum &\nTours", target: "Growth\nOptions" },

        { source: "World Ducati\nWeekend", target: "Brand\nEcosystem" },
        { source: "World Ducati\nWeekend", target: "Growth\nOptions" },

        { source: "Owners Clubs\n(DOC)", target: "Brand\nEcosystem" },
        { source: "Owners Clubs\n(DOC)", target: "Growth\nOptions" },

        { source: "Ducati.com", target: "Brand\nEcosystem" },
        { source: "Ducati.com", target: "Growth\nOptions" },

        { source: "Advertising &\nCo-Marketing", target: "Brand\nEcosystem" },
        { source: "Advertising &\nCo-Marketing", target: "Growth\nOptions" },

        { source: "Sponsor / Engine\nSales", target: "Racing\nProgramme" },
        { source: "Sponsor / Engine\nSales", target: "Growth\nOptions" },

        { source: "Limited-Edition\nOnline Models", target: "Brand\nEcosystem" },
        { source: "Limited-Edition\nOnline Models", target: "Performance\nEdge" },
        { source: "Limited-Edition\nOnline Models", target: "Growth\nOptions" },

        { source: "Product-Line\nBroadening", target: "Growth\nOptions" },
        { source: "Product-Line\nBroadening", target: "Performance\nEdge" },

        { source: "Planned Cruiser\nEntry", target: "Growth\nOptions" },
        { source: "Planned Cruiser\nEntry", target: "Performance\nEdge" },
        { source: "Planned Cruiser\nEntry", target: "Brand\nEcosystem" },

        { source: "Subsidiary\nExpansion", target: "Growth\nOptions" },
        { source: "Subsidiary\nExpansion", target: "Brand\nEcosystem" },

        { source: "Community-Led\nMarketing", target: "Growth\nOptions" },
        { source: "Community-Led\nMarketing", target: "Brand\nEcosystem" },

        // Goals to Results
        { source: "Performance\nEdge", target: "Price Premium\n30%+ vs. peers" },
        { source: "Performance\nEdge", target: "Sport-bike share\n4% → 6.7%" },
        { source: "Racing\nProgramme", target: "27% cite racing\n#1 factor" },
        { source: "Racing\nProgramme", target: "Racing revenue\n€7.9m (2000)" },
        { source: "Brand\nEcosystem", target: "Repeat-purchase\nintent 55%" },
        { source: "Brand\nEcosystem", target: "Accessories/Apparel\n≈7% of revenue" },
        { source: "Operational\nModel", target: "Materials cost\n-12 p.p." },
        { source: "Operational\nModel", target: "Units per worker\ndoubled" },
        { source: "Growth\nOptions", target: "EBITDA margin\n17% → 20% target" },
        { source: "Growth\nOptions", target: "Revenues x4\n('96–'00)" }
    ]
}; 