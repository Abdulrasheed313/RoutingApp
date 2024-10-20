import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contactus from './pages/Contactus.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children:[
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'services',
      element: <Services />,
    },
    {
      path: 'contactus',
      element: <Contactus />,
    },
  ]
}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
