"use client";

import { fetchUsers, addUser, deleteUser, changePassword } from '@/fetch/user-api';
import { useState, useEffect } from 'react';
import AddUserForm from '@/components/AddUserForm';
import UserList from '@/components/UserList';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => setError(err.message));
  }, []);

  const handleAddUser = async (data) => {
    try {
      setError('');
      const newUser = await addUser(data);
      setUsers((prev) => [...prev, newUser]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      setError('');
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChangePassword = async (id, password) => {
    try {
      setError('');
      await changePassword(id, { password });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <AddUserForm onSubmit={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} onChangePassword={handleChangePassword} />
    </div>
  );
}
