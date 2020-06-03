import React, {useState} from 'react';
import useFetchDataUser from '../hooks/useFetchDataUser'

export interface Props {
    id: number;
    onClose(): void;
}
const User: React.FC<Props> = ({id, onClose}) => {

    const user = useFetchDataUser(id)
    
    return (
        <div>
            {user.status === 'loading' && <div>Loading...</div>}
            {user.status === 'loaded' && (

            <div>
                <button onClick={onClose}>X</button>
                { Object.values(user.payload.data[0]).map((item, i) => {
                    return <div key={i}>{item}</div>
                    })
                }
            </div>
            
            )}
            {user.status === 'error' && <div>Error message</div>}
        </div>
    )
}

export default User