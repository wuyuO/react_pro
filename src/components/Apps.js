import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../redux/action'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class Apps extends Component {
  // static a = 'test'
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
			<div>
				<AddTodo
					onAddClick = { text =>
						dispatch(addTodo(text))
				} />
				<TodoList
					todos = { visibleTodos }
					onTodoClick = { index =>
						dispatch(completeTodo(index))
					} />
				<Footer
					filter = { visibilityFilter }
					onFilterChange = { nextFilter =>
						dispatch( setVisibilityFilter(nextFilter))
					} />
			</div>
		)
  }
}

Apps.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
   text: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired
 }).isRequired).isRequired,
 visibilityFilter: PropTypes.oneOf([
   'SHOW_ALL',
   'SHOW_COMPLETED',
   'SHOW_ACTIVE'
 ]).isRequired
}

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
const select = (state, ownProps) => {
  console.log(ownProps.name);
  return {
    visibleTodos: selectTodos(state.todos, state.VisibilityFilter),
		visibilityFilter: state.VisibilityFilter
  }
}

const FilterLink = connect(
  select
)(Apps)
export default FilterLink
