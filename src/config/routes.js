import App from '../components/App'
import Calendar from '../routes/Calendar'

export default{
  childRoutes: [ {
    path: '/',
    component: App,
    childRoutes: [
      Calendar
    ]
  } ]
}
