# CropFinder v2 - Component-Based Architecture

A mobile-first crop discovery app built with React, TypeScript, Mapbox, and Tailwind CSS.

## 🏗️ Architecture

This project uses a **component library approach** with clear separation of concerns.

### Component Structure

```
src/
├── App.tsx                          # Main app with state management
├── types.ts                         # TypeScript interfaces
├── main.tsx                         # Entry point
│
├── components/
│   ├── layout/                      # Layout wrappers
│   │   ├── MobileFrame.tsx         # iPhone device frame
│   │   └── BottomPanel.tsx         # Bottom sheet container
│   │
│   ├── map/                         # Map components
│   │   └── MapView.tsx             # Mapbox GL integration
│   │
│   ├── navigation/                  # Navigation & controls
│   │   ├── TopBar.tsx              # Top header with menu button
│   │   ├── SearchBar.tsx           # Search input
│   │   ├── LayerToggle.tsx         # Map layers button
│   │   ├── LayerDropdown.tsx       # Layer settings menu
│   │   └── SlideOutMenu.tsx        # Hamburger menu drawer
│   │
│   ├── field/                       # Crop field components
│   │   ├── FieldCard.tsx           # Main field info card
│   │   ├── FieldCardHeader.tsx     # Card header with controls
│   │   ├── FieldCardDetails.tsx    # Field information display
│   │   └── SaveButton.tsx          # Animated save/bookmark button
│   │
│   └── ui/                          # Reusable UI components
│       ├── Badge.tsx               # Status badges
│       ├── InfoRow.tsx             # Info display row
│       └── ImageWithFallback.tsx   # Image with loading/error states
│
├── data/
│   └── cropData.ts                 # Mock GeoJSON crop data
│
└── styles/
    └── index.css                   # Global styles & Tailwind
```

## 🎯 Key Features

### Component-Based Benefits
- **Modularity**: Each component has a single responsibility
- **Reusability**: Components can be used anywhere
- **Testability**: Easy to test individual components
- **Maintainability**: Changes are isolated to specific files
- **Scalability**: Easy to add new features

### Current Features
- 📱 Mobile-first design (iPhone frame)
- 🗺️ Interactive Mapbox map with multiple view modes
- 🌾 GeoJSON crop field polygons
- 🔍 Search functionality
- 💾 Save/bookmark crops ("My Farm")
- 🎨 Animated UI transitions
- 🎯 Layer controls (show/hide crop fields)
- 📊 Detailed crop information cards

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Mapbox GL** - Interactive maps
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Component Dependencies

### Core Dependencies
- `react`, `react-dom` - React framework
- `mapbox-gl`, `react-map-gl` - Map integration
- `framer-motion` - Smooth animations
- `lucide-react` - Icon library
- `clsx` - Conditional className utility

## 🎨 Design System

### Colors
- Crop-specific colors defined in `cropData.ts`
- UI uses Tailwind's slate/gray scale
- Accent color: Orange (#FF9500)

### Typography
- System font stack (San Francisco on iOS)
- Font sizes: xs (12px), sm (14px), base (16px), lg (18px)

## 🗺️ Map Configuration

The app supports three map views:
- **Standard**: Street map (`streets-v12`)
- **Satellite**: Aerial imagery (`satellite-streets-v12`)
- **Terrain**: Topographic map (`outdoors-v12`)

## 📝 Adding New Components

1. Create component file in appropriate directory
2. Export as default
3. Import in parent component
4. Pass props for configuration

Example:
```tsx
// src/components/ui/NewComponent.tsx
interface NewComponentProps {
  data: string;
}

export default function NewComponent({ data }: NewComponentProps) {
  return <div>{data}</div>;
}
```

## 🔮 Future Enhancements

- [ ] Custom hooks (`useGeolocation`, `useSavedFields`)
- [ ] Real-time crop data API integration
- [ ] User authentication
- [ ] Native mobile app (React Native)
- [ ] Offline support
- [ ] Advanced filtering
- [ ] Crop recommendations
- [ ] Weather integration

## 📱 Path to Native App

This architecture is designed to transition to React Native:
1. Components remain largely the same
2. Swap `MapView` for React Native Mapbox
3. Replace Framer Motion with React Native Animated
4. Update layout components for native navigation

## 🤝 Contributing

This is a component-based architecture. When adding features:
1. Keep components small and focused
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Add props interfaces for all components
5. Keep styles in Tailwind classes
6. Use Framer Motion for animations

## 📄 License

MIT
