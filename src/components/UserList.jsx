import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, searchTerm, handleEdit, handleDelete }) => {
  const filteredUsers = users.filter(user => `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="user-list">
      {filteredUsers.map(user => <UserCard key={user.id} user={user} handleEdit={handleEdit} handleDelete={handleDelete} />)}
    </div>
  );
};

export default UserList;
