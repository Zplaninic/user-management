import UserInterface from './UserInterface'
import Pager from './Pager'

export default interface Database {
    users: UserInterface[]
    getUsers: (
        page: string,
        filter: 'number' | 'id' | 'name' | 'surname' | 'address' | 'email' | 'birthday',
        sort: string,
        param: string,
    ) => Promise<
        | UserInterface[]
        | {
              users: UserInterface[]
              pager: Pager
          }
    >
    getUser(id: string): Promise<UserInterface[]>
    deleteUser(id: string): Promise<UserInterface[]>
    insertUser(user: UserInterface): Promise<UserInterface>
}
