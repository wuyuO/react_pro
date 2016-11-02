import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
// import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import todoApp from './redux/reducer'
import Apps from './components/Apps'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './redux/action'
// import rootRoute from './config/routes'
// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './redux/action'

let store = createStore(todoApp)
//
// //打印初始状态
// console.log(store.getState())
//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// // 发起一系列 action
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe()

// render((
//   <Router
//     history={browserHistory}
//     routes={rootRoute}
//   />
// ), document.getElementById('react'))

render((
  <Provider store= { store }>
    <Apps name="test" />
  </Provider>
), document.getElementById('root'))

// store.dispatch(setVisibilityFilter('SHOW_ALL'))
// store.dispatch(addTodo('TESTTSSTST'))
