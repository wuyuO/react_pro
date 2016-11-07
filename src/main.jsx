import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import Root from "./Root"
import "./Asset/css/style.less"

render((
  <Root />
), document.getElementById("root"))
