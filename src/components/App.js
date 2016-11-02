import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'
// import Calendar from '../routes/Calendar'

let COURSES = [
  {
    id: 0,
    name: 'React Fundamentals',
    grade: 'B',
    announcements: [
      {
        id: 0,
        title: 'No class tomorrow',
        body: 'There is no class tomorrow, please do not show up'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'Build a router',
        body: 'It will be easy, seriously, like 2 hours, 100 lines of code, no biggie',
        grade: 'N/A'
      }
    ]

  },

  {
    id: 1,
    name: 'Reusable React Components',
    grade: 'A-',
    announcements: [
      {
        id: 0,
        title: 'Final exam next wednesday',
        body: 'You had better prepare'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'PropTypes',
        body: 'They aren\'t for you.',
        grade: '80%'
      },
      {
        id: 1,
        title: 'Iterating and Cloning Children',
        body: 'You can totally do it.',
        grade: '95%'
      }
    ]
  }
]

function App(props) {
  return (
    <div>
      <GlobalNav />
      <div style={{ padding: 20 }}>
        {props.children || <Dashboard courses={COURSES} />}
      </div>
    </div>
  )
}

App.propTypes = {
  children:React.PropTypes.object
}

export default App
