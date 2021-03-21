// import React, {useState} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './Messages.css';
import Message from './Message/Message'


const Messages = ({messages,name}) => {
  return (
    <ScrollToBottom className="messages" behavior="smooth" debug={false}>
      {messages.map((message, i) => <div key={i}>
        <Message message={message} name={name}/>
      </div>)}
    </ScrollToBottom>
  )
}
export default Messages;