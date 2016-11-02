import Calendar from './components/Calendar'

module.exports = {
  path: 'calendar',
  getComponent(nextState, cb) {
    require.ensure([], () => {
      cb(null, Calendar)
    })
  }
}
