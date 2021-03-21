import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css';


const Join =() => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    
      <div className="joinOuterContainer center">
        <div className="blurBox">
          <h1 className="title">Team 8 KTPM1 - Thực tập cơ sở ngành IT6040.1</h1>
          <div className="joinInnerContainer">
            <h2 className="heading">Join</h2> 
            <div><input onChange={(event) => setName(event.target.value)} type="text" className="joinInput" placeholder="Name" /></div>
            <div><input onChange={(event) => setRoom(event.target.value)} type="text" className="joinInput mt-20" placeholder="Room" /></div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
              <button className="button mt-20" type="submit">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
      
  )
}
export default Join;