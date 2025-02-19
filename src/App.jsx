import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Login from './pages/login/login'
import SignUp from './pages/signUp/signUp'
import Products from './pages/products/products'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/products',
          element: <Products/>
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
