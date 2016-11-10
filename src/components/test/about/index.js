import About from "./components/about"

const getComponent = (nextState, cb) => {
  require.ensure([], () => {
    cb(null, About)
  })
}

export default getComponent
