import { combineReducers } from 'redux'
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from './action'
const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action ) {
  switch (action.type) {
    case ADD_TODO:
	  return [
    ...state,
    {
      text: action.text,
      completed: false
    }
  ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index],{
          completed: true
	  }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function VisibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  VisibilityFilter
})

export default todoApp
