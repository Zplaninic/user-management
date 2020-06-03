import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';
import {Pager} from '../types/Pager'
import { UserInterface } from '../types/UserInterface'

interface Users {
    data: {
        users: UserInterface[]
        pager: Pager
    }
}

interface InitialState {
    data: {
            users: UserInterface[]
            pager: Pager

    },
    error: null,
    loading: boolean,
    getUsers: any,
    addUser: any,
    reload: boolean
}

interface Provider extends InitialState {
    getUsers: (page: number, filter: string, sort: string) => Promise<void>
}
// const users: UserInterface[] = []
const initialState = {
    data: {
            users: [    
                {
                    id: '',
                    name: '',
                    surname: '',
                    address: '',
                    number: '', 
                    email: '',
                    birthday: '',
                }
            ],
            pager: {
                totalItems: 0,
                currentPage: 0,
                pageSize: 0,
                totalPages: 0,
                startPage: 0,
                endPage: 0,
                startIndex: 0,
                endIndex: 0,
                pages: []
        }
    },
    error: null, 
    loading: true,
    getUsers: 0,
    addUser: 0,
    reload: false
}
    
export const GlobalContext = createContext<InitialState>(initialState)

type Props = {
    children: React.ReactNode
}
export const GlobalProvider = ({children}:Props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getUsers(page:number, filter:string, sort:string) {
        try {
            const res:Users = await axios.get(`http://localhost:5000/api/users/?page=${page}&filter=${filter}&sort=${sort}`)
            dispatch({
                type: 'GET_USERS',
                payload: res.data
              });
        }   catch (err) {
            dispatch({
              type: 'ERROR',
              payload: err.response.data.error
            });
        } 
        
    }

    async function addUser(user:UserInterface, id:string) {
        try {
            const res:any = await axios.post(`http://localhost:5000/api/users/${id}`, user)
            dispatch({
                type: 'ADD_USER',
                payload: res.data
            })  
        } catch (err) {
            console.error(err)
            // dispatch({
            //     type: 'ERROR',
            //     payload: err.response.data.error
            // });
        }

    }
    

    return (<GlobalContext.Provider value={{
        data: state.users,
        error: state.error,
        loading: state.loading,
        reload: state.reload,
        getUsers,
        addUser
      }}>
        {children}
      </GlobalContext.Provider>);
}