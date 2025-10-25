import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { Home, About, Projects, Skills, Education } from './components/index.js'
import { Provider } from 'react-redux'
import { store } from './assets/store.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='skills' element={<Skills />} />
        <Route path='education' element={<Education />} />
      </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
