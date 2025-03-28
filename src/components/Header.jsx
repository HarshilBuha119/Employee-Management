import React from 'react';

const Header = ({ handleLogout }) => (
  <div className="header">
    <h1>User Management</h1>
    <button onClick={handleLogout} className="logout-btn">Logout</button>
  </div>
);

export default Header;
