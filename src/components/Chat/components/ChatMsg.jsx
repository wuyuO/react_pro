import React, { PropTypes } from "react"
import img from "../../../Asset/img/1.jpg"

const ChatMsg = props => {
  const direction = props.direction ? "chatmsg chatmsg_left" : "chatmsg chatmsg_right"
  const dirImg = props.direction ? "img_left" : "img_right"

  return (
    <div className={direction}>
      <img className={dirImg} src={img} alt="用户头像" />
      <div className="msg">
        Apache和Nginx是世界上两个最流行的开源web服务器，
        Apache和Nginx是世界上两个最流行的开源web服务器，
        Apache和Nginx是世界上两个最流行的开源web服务器，
        Apache和Nginx是世界上两个最流行的开源web服务器，
      </div>
    </div>
  )
}


ChatMsg.propTypes = {
  direction: PropTypes.bool.isRequired
}

export default ChatMsg
