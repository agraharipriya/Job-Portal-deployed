import React from 'react'

const NotificationPage = ({title,message}) => {
  return (
<div className="notification">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default NotificationPage