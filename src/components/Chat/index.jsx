import Chat from "./components/Chat"

const getComponent = (nextState, cb) => {
  require.ensure([], () => {
    cb(null, Chat)
  })
}

export default getComponent
