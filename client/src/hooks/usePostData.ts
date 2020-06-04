import { useState } from 'react';
import { ApiState } from '../types/ApiState'
import { UserInterface } from '../types/UserInterface'
import config from '../config/config'
import axios from 'axios'

const useAddData = () => {
    const [result, setResult] = useState<ApiState<UserInterface>>({
        status: 'init'
    })

    const createUserinDb = (user: UserInterface, id:string) => {
        setResult({status: 'loading'})

        return new Promise((resolve, reject) => {
            
            axios.post(`${config.port}/api/users/${id}`, user)
            .then(response => {
              setResult({ status: 'loaded', payload: response.data });
              resolve(response);
            })
            .catch(error => {
              setResult({ status: 'error', error });
              reject(error);
            });
        })

    }

    return {
        result,
        createUserinDb
    }
}

export default useAddData