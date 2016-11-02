import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  padding: 11,
  fontWeight: 200,
  background: light,
  color: dark
}

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <IndexLink  to="/" style={styles.link} activeStyle={styles.activeLink}>Home</IndexLink>{' '}
          <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>Calendar</Link>{' '}
          <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>Grades</Link>{' '}
          <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Messages</Link>{' '}
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">{user.name}</Link> <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    )
  }
}

GlobalNav.propTypes = {
  user:React.PropTypes.object.isRequired
}

// GlobalNav.defaultProps = {
//   user() {
//     return{
//       id: 1,
//       name: 'Ryan Florence'
//     }
//   }
// }

GlobalNav.defaultProps = {
  user:{
    id: 1,
    name: 'Ryan Florence'
  }
}

export default GlobalNav
