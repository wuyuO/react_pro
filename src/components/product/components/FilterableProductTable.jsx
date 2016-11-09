import React, { PropTypes, Component } from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: "",
      inStockOnly: false
    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText,
      inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.array.isRequired
}

export default FilterableProductTable
