import React from 'react';
import useFetchDataUser from '../hooks/useFetchDataUser'
import styled from 'styled-components'

export interface Props {
    id: string;
    onClose(): void;
}
const User: React.FC<Props> = ({id, onClose}) => {

    const user = useFetchDataUser(id)
    
    return (
        <UserContainer>
            <div className='user-object'>
                {user.status === 'loading' && <div>Loading...</div>}
                {user.status === 'loaded' && (

                <div className='user-data'>
                    <div className="button-container"> 
                        <ButtonX onClick={onClose}>X</ButtonX>
                    </div>
                    { Object.values(user.payload.data[0]).map((item, i) => {
                        return <p key={i}>{item}</p>
                        })
                    }
                </div>
                
                )}
                {user.status === 'error' && <div>Error message</div>}
            </div>
        </UserContainer>
    )
}

const UserContainer = styled.div `
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 5;
    text-align: center;

    .user-object {
        margin:30px;
        background-color: #64B6AC;;
        border-radius: 10px;
        height: 400px;
        margin-top: 0;

        .user-data {
            padding-top: 15px;

            p {
                font-size: 15px;
                margin-bottom: 10px;
                background-color: #FCFFFD;
                line-height: 25px;
                margin: 10px;
                border-radius: 5px;
            }

            .button-container {
                margin: 7px;
                text-align: right;
            }
        }
    }
`

const ButtonX = styled.button `
    border: none;
    border-radius: 50%;
    background-color: #5D737E;
    padding: 8px;
    color: #fff;
`
export default User