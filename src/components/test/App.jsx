import React, { PropTypes } from "react"
import NavTab from "./navtab"

const App = ({ children }) => (
  <div>
    <NavTab />
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
