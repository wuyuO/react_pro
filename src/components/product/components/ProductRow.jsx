import React, { PropTypes } from "react"

const productRow = props => {
  // const { product } = props
  const name = props.product.stocked ? props.product.name : <span style={{ color: "red" }}>{props.product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  )
}

productRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired
  }).isRequired
}

export default productRow
