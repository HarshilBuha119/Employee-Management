import React from 'react';

const UserCard = ({ user, handleEdit, handleDelete }) => (
  <div className="user-card">
    <img src={user.avatar} alt="Avatar" className="avatar" />
    <div className="user-info">
      <p>{user.first_name} {user.last_name}</p>
      <p>{user.email}</p>
    </div>
    <div className="user-actions">
      <button className='button' onClick={() => handleEdit(user)}>Edit</button>
      <button className='button' onClick={() => handleDelete(user.id)}>Delete</button>
    </div>
  </div>
);

export default UserCard;
