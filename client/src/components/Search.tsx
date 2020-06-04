import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

export interface Props {
    searchInput: string
    setSearchInput: Dispatch<SetStateAction<string>>
}

const Search: React.FC<Props> = ({ searchInput, setSearchInput }) => {
    return (
        <SearchContainer>
            <form>
                <label>Search by email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </form>
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: #64b6ac;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        label {
            margin-left: 10px;
            font-size: 20px;
            color: #fff;
        }

        input {
            outline: none;
            border: none;
            margin-left: 10px;
            width: 59%;
            line-height: 28px;
            border-radius: 5px;
        }
    }
`

export default Search
