import React from 'react';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';

const Users = () => {
  return (
    <div>
      <Navbar />
      <UserList />
      <AddUser />
    </div>
  );
};

export default Users;
