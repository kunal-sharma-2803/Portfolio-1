import React from 'react'
import { personalData } from '../../public/personalData.js'

const About = () => {
  return (
    <div id="about" className="bg-gray-900 py-16 relative">
      {/* Side label (only on large screens) */}
      <div className="hidden lg:flex flex-col items-center absolute top-20 -right-8">
        <span className="bg-cyan-400 text-gray-900 rotate-90 p-2 px-5 text-xl rounded-md font-semibold shadow-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-cyan-400"></span>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-cyan-400 text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src={personalData.profile}
            width={280}
            height={280}
            alt="Kunal"
            className="rounded-lg transition-all duration-700 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer shadow-lg"
          />
        </div>
      </div>
    </div>

  )
}

export default About
