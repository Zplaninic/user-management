import React, {useState, useContext} from 'react';
import {UserInterface} from '../types/UserInterface'
// import useAddData from '../hooks/usePostData'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/GlobalState'


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
    // const {result, createUserinDb} = useAddData()
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
        user.id = uuidv4()

        addUser(user, user.id)
        setUser(initialUserState)

        // createUserinDb(user, user.id).then(() => setUser(initialUserState))

    }
    
    return (
        <div>
            <form onSubmit={submitForm}>
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
                                    {/* {result.status === 'loading' && (
                                        <div className="loader-container">
                                        <Loader />
                                    </div>
                                    )}
                                    {result.status === 'loaded' && (
                                    <div>User is submitted</div>
                                    )}
                                    {result.status === 'error' && (
                                    <div>
                                        We have some errors, we are checking it.
                                    </div>
                                    )}  */}
        </div>
    )
}

export default CreateUser