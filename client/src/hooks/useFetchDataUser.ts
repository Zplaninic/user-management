import { useEffect, useState } from 'react'
import { ApiState } from '../types/ApiState'
import { UserInterface } from '../types/UserInterface'
import config from '../config/config'
import axios from 'axios'

const useFetchDataUser = (id: string) => {
    const [result, setResult] = useState<ApiState<UserInterface[]>>({
        status: 'loading',
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${config.port}/api/users/${id}`)
                setResult({ status: 'loaded', payload: data.data })
            } catch (error) {
                console.error(error)
                setResult({ status: 'error', error })
            }
        }

        fetchData()
    }, [id])

    return result
}

export default useFetchDataUser
