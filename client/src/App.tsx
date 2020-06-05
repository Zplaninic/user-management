import React from 'react'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import { GlobalProvider } from './context/GlobalState'
import styled from 'styled-components'
import Header from './components/Header'

import './App.css'

const App: React.FC = () => {
    return (
        <GlobalProvider>
            <AppContainer>
                <Header />
                <UserList />
                <CreateUser />
            </AppContainer>
        </GlobalProvider>
    )
}

export default App

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 50px auto;
        gap: 20px;
        height: 100vh;
    }
`
