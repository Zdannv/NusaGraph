# **App Name**: NusaGraph

## Core Features:

- Mode Switching: Allow users to toggle between 'Exploration Mode' (default) and 'Challenge Mode (NusaQuest)' using a global navigation bar.
- Interactive Knowledge Graph: Visualize Indonesian cultural entities and their relationships as an interactive 2D force-directed graph in Exploration Mode.
- Knowledge Graph Filtering: Enable users to filter graph nodes in Exploration Mode based on categories such as 'Era', 'Lokasi', and 'Kategori' using accordion-style controls.
- Node & Link Details Display: Display detailed information, including AI-generated summaries and metadata, for selected nodes or relationship links, sliding in from the right sidebar in Exploration Mode.
- NusaQuest Pathfinder Game: Provide a game-like interface in Challenge Mode where users navigate through the knowledge graph to complete 'Misi' (missions) by discovering paths.
- Exploration Energy System: Visually represent user progress and attempts in NusaQuest using 'Energi Eksplorasi' (Exploration Energy) indicators.
- Dynamic Graph Expansion: In NusaQuest, dynamically reveal graph nodes and connections only as the user explores and validates steps, starting with a 'fog of war' view.

## Style Guidelines:

- The chosen dark scheme employs a very dark background to evoke depth and an advanced feel. Primary color (for highlights and interactive elements): Gold (#ECAD1B), suggesting luxury and traditional 'Emas Keraton'. Background color: A very deep, desaturated brownish-charcoal (#151310), providing a warm subtle base that prevents harshness. Accent color: Terracotta Red (#BE4E23), adding a strong, earthy contrast and connection to Indonesian heritage.
- Headline and title font: 'Playfair' (serif), chosen for its classic, elegant aesthetic, reminiscent of ancient manuscripts (Lontar). Body text font: 'PT Sans' (sans-serif), providing clean readability and a modern counterbalance to the serif headings. Note: currently only Google Fonts are supported.
- Use icons from 'lucide-react' such as a traditional 'Gunungan' or 'Lotus' for the logo, maintaining the Nusantara theme. Emphasize iconography that suggests advanced technology with cultural roots.
- Sidebars and panels should incorporate subtle traditional Indonesian pattern overlays (e.g., very low opacity Batik Kawung SVG) to enhance the heritage theme. Use thin gold borders for card-like elements and panels, mimicking traditional brass carvings, providing structure and luxury.
- Utilize 'framer-motion' for smooth transitions, such as the sliding in/out of the right-hand details sidebar. Graph nodes should glow with chosen Nusantara colors (Gold, Deep Blue, Terracotta), and links should be thin, glowing amber lines to simulate a 'Traditional Cyberpunk' aesthetic. Animations should be subtle but purposeful, adding to the advanced yet rooted feel.