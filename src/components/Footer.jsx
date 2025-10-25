import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <a target="_blank" href="https://www.linkedin.com/in/kunal-sharma-0a90b92ba/" className="text-[#16f2b3]">Kunal</a>
          </p>
          <div className="flex items-center gap-5">
            {/* Star link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kunal-sharma-2803/Portfolio-1"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <img
                src="../../star--v1.png"
                alt="Star"
                className="w-5 h-5"
              />
              Star
            </a>

            {/* Fork link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kunal-sharma-2803/Portfolio-1/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <img
                src="../../code-fork.png"
                alt="Fork"
                className="w-5 h-5"
              />
              Fork
            </a>
          </div>

        </div>
      </div>
    </div >

  )
}

export default Footer
