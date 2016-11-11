import React from "react"
import img from "../../../Asset/img/1.jpg"

const UserItem = () => (
  <li className="user_item">
    <img className="img" src={img} alt="用户头像" />
    <span className="name">Webpack</span>
  </li>
)

export default UserItem
