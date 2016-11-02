import { connect } from 'react-redux'
import Apps from './Apps'
import { VisibilityFilters } from '../redux/action'

const selectTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}
const select = (state) => {
  return {
    visibleTodos: selectTodos(state.todos, state.VisibilityFilter),
		visibilityFilter: state.VisibilityFilter
  }
}

// const filter = (state) => {
//   return {
//
//   }
// }

const FilterLink = connect(
  select
)(Apps)
export default FilterLink
