import React from 'react';
import axios from 'axios';

const EditUserForm = ({ editUser, setEditUser, setUsers, users, setMessage }) => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${editUser.id}`, editUser);
      setUsers(users.map(u => u.id === editUser.id ? editUser : u));
      setEditUser(null);
      setMessage('User updated successfully!');
    } catch {
      setMessage('Error updating user.');
    }
  };

  return (
    <div className="container">
      <h1>Edit User</h1>
      <form onSubmit={handleUpdate} className="edit-form">
        <input type="text" value={editUser.first_name} onChange={(e) => setEditUser({ ...editUser, first_name: e.target.value })} required />
        <input type="text" value={editUser.last_name} onChange={(e) => setEditUser({ ...editUser, last_name: e.target.value })} required />
        <input type="email" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} required />
        <button type="submit">Update</button>
        <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUserForm;
