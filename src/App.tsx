import Sidebar from './components/Sidebar/Sidebar'
import SideMenu from './components/SideMenu'

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 20 }}>
        <h1>Vite + React + TypeScript</h1>
        <p>Hello, World!</p>
        <SideMenu />
      </main>
    </div>
  )
}

export default App