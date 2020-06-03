import React, {useState, useContext, useEffect} from 'react';
import useFetchData from '../hooks/useFetchData'
import User from './User'
import {GlobalContext} from '../context/GlobalState'

const UserList: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>('name')
    const [sort, setSort] = useState<string>('ascending')
    const [id, setid] = useState<number | null>()

    const { reload, data, getUsers, loading} = useContext(GlobalContext);

    useEffect(() => {
        getUsers(page, filter, sort);
    }, [page, filter, sort, reload]);   

    const pager = data?.pager ?? {}
    const users = data?.users ?? []
     
    return (
        <div>
            <div className="table-body">
                {loading === true && <div>Loading...</div>}
                {loading === false &&
                users.map(user => {
                    return <div key={user.id} 
                            onClick={() => setid(parseInt(user.id))}>{user.name} {user.surname}</div>
                })
                }

            </div>
            <div>
                {loading === false &&
                    pager.pages.map((page) => {
                        return <button key={page} onClick={(e) => setPage(page)}>{page}</button>
                    })
                }
            </div>
            <div>
                <button key="name" onClick={() => setFilter('name')}>Sort by name</button>
                <button key="surname" onClick={() => setFilter('surname')}>Sort by surname</button>
                <button key="ascending" onClick={() => setSort('ascending')}>Ascending</button>
                <button key="descending" onClick={() => setSort('descending')}>Descending</button>
            </div>
            <div>
            {!!id && <User id={id}  onClose={() => setid(null)}/>}
            {/* onClose={() => setid(null)} */}
            </div>
            {/* <div>
                {users.status === 'loaded' && 
                    <ul className="pagination">
                    <li className={`page-item first-item ${users.payload.data.pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link"> First</button>
                    </li>
                    <li className={`page-item previous-item ${users.payload.data.pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link">Previous</button>
                    </li>
                    {users.payload.data.pager.pages.map(page =>
                        <li key={page} className={`page-item number-item ${users.payload.data.pager.currentPage === page ? 'active' : ''}`}>
                            <button className="page-link">{page}</button>
                        </li>
                    )}
                    <li className={`page-item next-item ${users.payload.data.pager.currentPage === users.payload.data.pager.totalPages ? 'disabled' : ''}`}>
                        <button className="page-link">Next</button>
                    </li>
                    <li className={`page-item last-item ${users.payload.data.pager.currentPage === users.payload.data.pager.totalPages ? 'disabled' : ''}`}>
                        <button className="page-link">Last</button>
                    </li>
                </ul>
                }

            </div> */}
            {/* <div> 
                <div onClick={nextPage}> Next Page  </div>
                <div onClick={previousPage}> Previous page</div> 
            </div> */}
                            {/* {users.status === 'error' && (
                <div>There is an error on our side, we are checking it</div>
                )} */}
        </div>
    )
}

export default UserList