import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import App from "./components/App"
import Dashboard from "./components/Dashboard"
import About from "./components/about"
import AsyncApp from "./components/AsyncApp"
import Product from "./components/product"

const rootRoute = () => (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" getComponent={About} />
      <Route path="AsyncApp" getComponent={AsyncApp} />
      <Route path="product" getComponent={Product} />
    </Route>
  </Router>
)

export default rootRoute
