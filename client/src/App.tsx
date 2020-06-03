import React from 'react';
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import {GlobalProvider} from './context/GlobalState'
import Search from './components/Search'


import './App.css';

const App: React.FC = () => {
  return (
      <GlobalProvider>
        <UserList />
        <CreateUser /> 
        <Search />
      </GlobalProvider>
    )
}

export default App;
