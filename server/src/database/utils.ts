import UserInterface from '../types/UserInterface'
import { sortAscending, sortDescending, filterUser } from '../utils/helper'
import paginate from 'jw-paginate'

const users: Array<UserInterface> = []

const db = {
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
        const filteredUsers = filterUser(db.users, 'email', param)

        const sortedUsers = sortAscending(filteredUsers, filter)

        const pager = paginate(sortedUsers.length, currentPage, pageSize)
        const users = sortedUsers.slice(pager.startIndex, pager.endIndex + 1)

        return { users, pager }
    } else if (sort === 'descending') {
        const filteredUsers = filterUser(db.users, 'email', param)

        const sortedUsers = sortDescending(filteredUsers, filter)

        const pager = paginate(sortedUsers.length, currentPage, pageSize)
        const users = sortedUsers.slice(pager.startIndex, pager.endIndex + 1)

        return { users, pager }
    }

    return db.users
}

async function getUser(id: string) {
    return db.users.filter((user) => user.id === id)
}

async function deleteUser(id: string) {
    const user = getUser(id)
    db.users = db.users.filter((user) => user.id !== id)
    return user
}

async function insertUser(user: UserInterface) {
    const newUser = user

    db.users.push(newUser)
    return newUser
}

export default db
