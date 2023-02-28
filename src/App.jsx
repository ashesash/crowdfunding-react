import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProjectCreate from "./pages/ProjectCreate"
import Project from "./pages/ProjectPage"
import LogoutPage from "./pages/LogoutPage"

const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/project/:id',
        element: <Project />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/createProject',
        element: <ProjectCreate />
      },
      {
        path: '/logout',
        element: <LogoutPage />
      },

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
