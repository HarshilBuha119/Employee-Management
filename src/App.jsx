import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editUser, setEditUser] = useState(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const BASE_URL = "https://reqres.in";

  useEffect(() => {
    if (token) fetchUsers();
  }, [token, page]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch {
      setMessage("Error fetching users.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
      setEmail("");
      setPassword("");
    } catch {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      setMessage("User deleted successfully!");
    } catch {
      setMessage("Error deleting user.");
    }
  };

  if (!token) {
    return (
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        message={message}
      />
    );
  }

  if (editUser) {
    return (
      <EditUserForm
        editUser={editUser}
        setEditUser={setEditUser}
        setUsers={setUsers}
        users={users}
        setMessage={setMessage}
      />
    );
  }

  return (
    <div className="container">
      <Header handleLogout={handleLogout} />
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <UserList
        users={users}
        searchTerm={searchTerm}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
