import React from 'react'
import Avatar from 'react-avatar'

function Client({username, socketId}) {
  return (
    <div className='client'>
        <Avatar name={username} size={50} round='14px'  />
        {username}
    </div>
  )
}

export default Client