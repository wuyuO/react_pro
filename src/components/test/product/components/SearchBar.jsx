import React, { PropTypes, Component } from "react"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  // handleChange() {
  //   this.props.handleUserInput(
  //     this.refs.filterTextInput.value,
  //     this.refs.inStockOnlyInput.checked
  //   )
  // }

  handleChange() {
    this.props.handleUserInput(
      this.filter.value,
      this.inStockOnly.checked
    )
  }

  render() {
    const { filterText, inStockOnly } = this.props
    return (
      <form>
        <input onChange={this.handleChange} ref={input => this.filter = input} type="text" placeholder="Search..." value={filterText} />
        <p>
          <input onChange={this.handleChange} ref={input => this.inStockOnly = input} type="checkbox" checked={inStockOnly} />
          {" "}
          Only show products in stock
        </p>
      </form>
    )
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  handleUserInput: PropTypes.func.isRequired
}

export default SearchBar
