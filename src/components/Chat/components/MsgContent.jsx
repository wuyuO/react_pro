import React from "react"
import ChatMsg from "./ChatMsg"
import Time from "./Time"

const MsgContent = () => (
  <div className="msg_content">
    <Time />
    <ChatMsg direction />
    <Time />
    <ChatMsg direction={false} />
    <Time />
    <ChatMsg direction />
    <ChatMsg direction />
    <ChatMsg direction />
    <Time />
    <ChatMsg direction={false} />
    <ChatMsg direction={false} />
    <ChatMsg direction={false} />
    <ChatMsg direction={false} />
  </div>
)

export default MsgContent
