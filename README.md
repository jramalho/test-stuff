# Beautiful Hello Three

Projeto "Olá, mundo!" usando React + TypeScript + three.js via @react-three/fiber e @react-three/drei.

## 🚀 Features

### Core 3D Rendering
- ✨ **Animated 3D Torus** - Smooth wobble material with metallic finish
- 🎮 **Orbit Controls** - Interactive camera controls (drag to rotate, scroll to zoom)
- 🌆 **Environment Lighting** - HDR-based "city" environment for realistic reflections

### Performance & Reliability (New!)
- ⚡ **Automatic Quality Adjustment** - `<PerformanceMonitor>` dynamically adjusts pixel ratio based on device performance
- 🛡️ **Error Boundaries** - Graceful error handling with user-friendly fallback UI
- ⏳ **Loading States** - Smooth loading experience with React Suspense
- 📊 **Performance Analytics** - Built-in performance tracking for monitoring FPS and quality settings

### Code Quality
- 🎯 **TypeScript** - Full type safety throughout the application
- 🧪 **Testing Setup** - Vitest + React Testing Library configured
- 🔥 **Hot Module Replacement** - Instant feedback during development with Vite

## 📦 Installation & Usage

Para rodar no Windows PowerShell:

```powershell
# 1) Instalar dependências
npm install

# 2) Rodar em desenvolvimento
npm run dev

# 3) Construir
npm run build

# 4) Pré-visualizar build
npm run preview

# 5) Rodar testes
npm run test
```

## 🏗️ Architecture

```
src/
├── App.tsx              # Main app with Error Boundary and Suspense
├── HelloScene.tsx       # 3D scene with PerformanceMonitor
├── ErrorBoundary.tsx    # Error handling component (new!)
├── Loading.tsx          # Loading fallback component (new!)
├── main.tsx            # React entry point
└── index.css           # Global styles
```

### Key Improvements

**1. Error Boundary**
Catches and handles 3D rendering errors gracefully, preventing the entire app from crashing if WebGL fails or a scene error occurs.

**2. Performance Monitoring**
Automatically adjusts rendering quality based on device performance:
- High-end devices: 2x pixel ratio for crisp visuals
- Low-end devices: 1x pixel ratio to maintain smooth 60fps

**3. Loading States**
Uses React Suspense to show loading feedback while 3D assets and environment maps load.

**4. Analytics Ready**
Exports `performanceData` object for integration with analytics platforms to track:
- Average FPS
- Quality tier (high/medium/low)
- User interactions with 3D scene

## 🎯 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14.1+
- ⚠️ Requires WebGL support

## 📚 Technologies

- **React 18.2** - UI framework
- **TypeScript 5.9** - Type safety
- **Three.js 0.150** - 3D rendering engine
- **@react-three/fiber 8.14** - React renderer for Three.js
- **@react-three/drei 9.27** - Essential 3D helpers
- **Vite 5.3** - Build tool & dev server
- **Vitest 1.6** - Testing framework

## 🔧 Next Steps

Based on the [Weekly Research Report](https://github.com/jramalho/test-stuff/issues), potential enhancements include:

- Add physics simulation with `@react-three/rapier`
- Implement post-processing effects (bloom, depth of field)
- Add XR support for VR/AR experiences
- Create reusable 3D component library
- Add user interaction tracking

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
