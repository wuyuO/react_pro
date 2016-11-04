import { createStore, applyMiddleware } from "redux"
import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./Redux/Reducers"

let middleware
if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger()
  middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
} else {
  middleware = applyMiddleware(thunkMiddleware)
}


export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    middleware
  )
}
