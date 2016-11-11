import React from "react"
import img from "../../../Asset/img/1.jpg"

const CurrUser = () => (
  <div className="curr_user">
    <img className="img" src={img} alt="当前用户头像" />
    <span className="name" >Coffce</span>
  </div>
)

export default CurrUser
