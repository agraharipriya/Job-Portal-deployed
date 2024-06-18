import React from 'react'
import NotificationPage from './NotificationPage'
import '../navComponents/Notification.css'
const Notification = () => {
  return (
    <div className="notification-page">
      <h1>Notifications</h1>
      <Notification title="New Message" message="You have a new message from John Doe." />
      <Notification title="New Comment" message="You have a new comment on your post." />
      <Notification title="New Friend Request" message="You have a new friend request from Jane Smith." />
    </div>
  )
}

export default Notification