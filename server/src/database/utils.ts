import paginate from 'jw-paginate'
import UserInterface from '../types/UserInterface'
import Pager from '../types/Pager'
import Database from '../types/Database'
import { sortAscending, sortDescending, filterUser } from '../utils/helper'
import { initialPager, initialUser } from '../config/initial'

const users: Array<UserInterface> = []

const db: Database = {
    users,
    getUsers,
    getUser,
    deleteUser,
    insertUser,
}

async function getUsers(
    page: string,
    filter: keyof UserInterface,
    sort: string,
    param: string,
) {
    const currentPage: number = parseInt(page)
    const pageSize: number = 8

    if (sort === 'ascending') {
        const filteredUsers: UserInterface[] = filterUser(db.users, 'email', param)

        const sortedUsers: UserInterface[] = sortAscending(filteredUsers, filter)

        const pager: Pager = paginate(sortedUsers.length, currentPage, pageSize)
        const users: UserInterface[] = sortedUsers.slice(
            pager.startIndex,
            pager.endIndex + 1,
        )

        return { users, pager }
    } else if (sort === 'descending') {
        const filteredUsers: UserInterface[] = filterUser(db.users, 'email', param)

        const sortedUsers: UserInterface[] = sortDescending(filteredUsers, filter)

        const pager: Pager = paginate(sortedUsers.length, currentPage, pageSize)
        const users: UserInterface[] = sortedUsers.slice(
            pager.startIndex,
            pager.endIndex + 1,
        )

        return { users, pager }
    }

    return { users: [initialUser], pager: initialPager }
}

async function getUser(id: string) {
    return db.users.filter((user) => user.id === id)
}

async function deleteUser(id: string) {
    const user: Promise<UserInterface[]> = getUser(id)
    db.users = db.users.filter((user) => user.id !== id)
    return user
}

async function insertUser(user: UserInterface) {
    const newUser: UserInterface = user

    db.users.push(newUser)
    return newUser
}

export default db
