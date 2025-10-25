import './App.css'
import { NavBar, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 scroll-smooth">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>

  )
}

export default App
