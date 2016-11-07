import React from "react"
import { Link, IndexLink } from "react-router"

const styles = {}

styles.activeLink = {
  color: "red"
}

styles.Link = {
  color: "green"
}

const NavTab = () => (
  <div>
    <h1>App nav</h1>
    <ul>
      <li><IndexLink to="/" style={styles.Link} activeStyle={styles.activeLink}>home</IndexLink></li>
      <li><Link to="/about" style={styles.Link} activeStyle={styles.activeLink}>about</Link></li>
      <li><Link to="/AsyncApp" style={styles.Link} activeStyle={styles.activeLink}>AsyncApp</Link></li>
    </ul>
  </div>
)

export default NavTab
