import React from "react"
import { Link } from "react-router"

const NavTab = () => (
  <div>
    <h1>App nav</h1>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/AsyncApp">AsyncApp</Link></li>
    </ul>
  </div>
)

export default NavTab
