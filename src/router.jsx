import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import App from "./components/app"
import Chat from "./components/Chat"
import Login from "./components/Login"

const rootRoute = () => (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute getComponent={Chat} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
)

export default rootRoute
