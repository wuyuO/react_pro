import ProductRow from "./components/test"

const getComponent = (nextState, cb) => {
  require.ensure([], () => {
    cb(null, ProductRow)
  })
}

export default getComponent
