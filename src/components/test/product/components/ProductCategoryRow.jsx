import React, { PropTypes } from "react"

const ProductCategoryRow = props => {
  const { category } = props
  return (
    <tr>
      <th colSpan="2" >{category}</th>
    </tr>
  )
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
}

export default ProductCategoryRow
