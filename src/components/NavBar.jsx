import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 md:px-8">
        <div className="flex-shrink-0">
          <Link to="/" className="text-cyan-400 text-3xl font-extrabold hover:text-pink-500 transition-colors duration-300">
            KUNAL
          </Link>
        </div>
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm">
          {['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'PROJECTS'].map((item, idx) => (
            <li key={idx}>
              <Link
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-200 hover:text-fuchsia-500 transition-colors duration-300 font-medium uppercase px-4 py-2 rounded-md"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
