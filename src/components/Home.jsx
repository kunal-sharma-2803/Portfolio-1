import { personalData } from '../../public/personalData'
import { Link } from 'react-router-dom'
import { skillsImage } from '../Images'

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-12 bg-gray-900 px-4 md:px-8 py-10 lg:py-16">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-white">
            Hello, <br />
            This is{' '}
            <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-cyan-400">{personalData.designation}</span>.
          </h1>
          <div className="my-8 flex gap-6 items-center">
            <Link
              to={personalData.github}
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skillsImage("github")}
                alt="GITHUB"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <Link
              to={personalData.linkedIn}
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skillsImage("linkedIn")}
                alt="LINKEDIN"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <Link
              to={personalData.leetcode}
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skillsImage("leetcode")}
                alt="LEETCODE"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link to={personalData.linkedIn} target="_blank" className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold uppercase tracking-wide text-sm md:text-base flex items-center gap-2 hover:gap-4 transition-all duration-300">
              Contact me
            </Link>

            <Link to={personalData.resume} target="_blank" className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold uppercase tracking-wide text-sm md:text-base flex items-center gap-2 hover:gap-4 transition-all duration-300">
              Get Resume
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg overflow-hidden relative">
          <div className="flex">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5 flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base text-gray-200">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-400">Kunal</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-400">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">AWS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">Tableau</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-400">GitHub</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">versatile:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">resourceful:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">driven:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">versatile</span>
                <span className="text-amber-400">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">driven</span>
                <span className="text-amber-400">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-400">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
