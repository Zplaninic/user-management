import React, {useState, useContext} from 'react';
import {UserInterface} from '../types/UserInterface'
// import useAddData from '../hooks/usePostData'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/GlobalState'
import styled from 'styled-components'



const CreateUser: React.FC = () => {
    
    const initialUserState: UserInterface = {
        id: '',
        name: '',
        surname: '',
        address: '',
        number: '', 
        email: '',
        birthday: '', 
    }

    const [user, setUser] = useState<UserInterface>(initialUserState)
    const { addUser }  = useContext(GlobalContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setUser(prevUser => ({
            ...prevUser,    
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        user.id = uuidv4().split('-')[0] //to make it more simple
        addUser(user, user.id)
        setUser(initialUserState)
    }
    
    return (
        <CreateUserContainer>
            <form onSubmit={submitForm}>
                <h4>Create User</h4>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={user.name}
                    onChange={handleChange}
                />
                 <input 
                    type="text"
                    name="surname"
                    placeholder="surname"
                    value={user.surname}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="address"
                    placeholder="adress"
                    value={user.address}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="number"
                    placeholder="mobile number"
                    value={user.number}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="birthday"
                    placeholder="birthday"
                    value={user.birthday}
                    onChange={handleChange}
                />
                <div className="button-container">
                    <button type="submit">Send</button>
                </div>
            </form> 
        </CreateUserContainer>
    )
}

const CreateUserContainer = styled.div `
    grid-column-start:2;
    grid-column-end:3;

    h4 {
        color: #fff;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px;
        background-color: #64B6AC;
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;



        input {
            outline: none;
            border: none;
            border-radius: 5px;
            width: 70%;
            line-height: 30px;
            margin: 5px;
            text-align: center;
        }

        button {
            margin-right: 25px;
            background-color: #5D737E;
            padding: 7px;
            border:none;
            border-radius: 5px;
            color: #fff;
        }
    }
`
export default CreateUser