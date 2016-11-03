import AsyncApp from "./components/AsyncApp"

const getComponent = (nextState, cb) => {
  require.ensure([], () => {
    cb(null, AsyncApp)
  })
}

export default getComponent
