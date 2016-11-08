import React from "react"
import product from "./ProductRow"

const products = {
  name: "test",
  price: "$49.99",
  stocked: true
}

const productTest = () => (
  <div>
    <product product={products} />
  </div>
)

export default productTest
