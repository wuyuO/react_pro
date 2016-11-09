import React, { PropTypes } from "react"

const ProductRow = props => {
  const { product } = props
  const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired
  }).isRequired
  // products: PropTypes.object.isRequired
}

export default ProductRow
