import React, {useState, useContext, useEffect} from 'react';
import User from './User'
import {GlobalContext} from '../context/GlobalState'
import useDebounce from '../hooks/useDebounce'
import Search from './Search'
import styled from 'styled-components'

const UserList: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>('name')
    const [sort, setSort] = useState<string>('ascending')
    const [id, setid] = useState<string | null>('')
    const [searchInput, setSearchInput] = useState<string>('')

    const debouncedInput = useDebounce(searchInput, 500)

    const { reload, data, getUsers, loading } = useContext(GlobalContext);

    useEffect(() => {
        getUsers(page, filter, sort, debouncedInput);
    }, [page, filter, sort, reload, debouncedInput]);   

    const pager = data?.pager ?? {}
    const users = data?.users ?? []
     
    return (
        <UserListContainer >
            <Table className="table-body">
                {loading === true && <div>Loading...</div>}
                {loading === false &&
                users.map(user => {
                    return <div className='row' key={user.id} 
                            onClick={() => setid(user.id)}>
                                <p className="cell">{user.name}</p>
                                <p className="cell">{user.surname}</p>
                                <p className="cell">{user.email}</p>
                            </div>
                })}
            </Table>
            <PagesContainer>
                {loading === false &&
                    pager.pages.map((page) => {
                        return <ButtonPages key={page} onClick={(e) => setPage(page)}>{page}</ButtonPages>
                    })
                }   
            </PagesContainer>
            <ButtonsContainer>
                <ButtonSort key="name" onClick={() => setFilter('name')}>Sort by name</ButtonSort>
                <ButtonSort key="surname" onClick={() => setFilter('surname')}>Sort by surname</ButtonSort>
                <ButtonSort key="ascending" onClick={() => setSort('ascending')}>Ascending</ButtonSort>
                <ButtonSort key="descending" onClick={() => setSort('descending')}>Descending</ButtonSort>
            </ButtonsContainer>
            <Search  searchInput={searchInput} setSearchInput={setSearchInput}/>
            {!!id && <User id={id}  onClose={() => setid(null)}/>}
        </UserListContainer>
    )
}



const UserListContainer = styled.div `
    grid-column-start: 1;
    grid-column-end: 2;
    gap: 20px;

    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
`

const PagesContainer = styled.div `
    grid-column-start: 2;
    grid-column-end: 3;

    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonPages = styled.button `
    margin-right: 25px;
    background-color: #5D737E;
    padding: 7px;
    border:none;
    border-radius: 5px;
    color: #fff;
`

const ButtonsContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;

    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonSort = styled.button `
    margin-right: 25px;
    background-color: #5D737E;
    padding: 7px;
    border:none;
    border-radius: 5px;
    color: #fff;
`

const Table = styled.div `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    min-height: 350px;
    height: 100%;
    width: 100%;
    display: table;

    .row {
        display: table-row;
        background-color: #FCFFFD;
        margin:11px;
        cursor: -webkit-grabbing; cursor: grabbing;
        
        .cell {
            display: table-cell;
            font-size: 15px;
            line-height: 25px;
            width: 33%;
            margin: 11px;
            border-bottom: 1px solid;
            vertical-align: middle;
            max-height: 230px;
        }
    }
`

export default UserList