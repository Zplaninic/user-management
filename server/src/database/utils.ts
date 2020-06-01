const users: Array<object> = []

const db = {
    users,
    getUsers,
    getUser,
    deleteUser,
    insertUser
}

async function getUsers() {
    return db.users;
}

async function getUser(id:string) {
    return db.users.filter((user:any) => user.id === id )
}

async function deleteUser(id:string) {
    const user = getUser(id)
    db.users = db.users.filter((user:any) => user.id !== id)
    return user
}

async function insertUser(user:object) {
    const newUser = user;

    db.users.push(newUser)
    return newUser
}

export default db;