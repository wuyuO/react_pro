import React, { PropTypes } from "react"
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

const ProductTable = props => {
  const row = []
  const { filterText, inStockOnly } = props
  let lastCategory = null

  props.products.forEach(product => {
    if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
      return
    }
    if (product.category !== lastCategory) {
      row.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }

    row.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  )
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired
}

export default ProductTable
