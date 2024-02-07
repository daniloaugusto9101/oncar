import React from "react"
import { Link, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <header>
        <h1>Teste</h1>
        <Link to={"/oncar"}>Home</Link>
      </header>
      <Outlet />
      <footer>
        <p>footer</p>
      </footer>
    </>
  )
}

export default RootLayout
