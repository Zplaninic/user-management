import db from '../database/utils'
import { Request, Response } from 'express'
import { initialPager, initialUser } from '../config/initial'

const getUsers = async (req: Request | undefined, res: Response) => {
    const page: any = req?.query.page ?? ''
    const filter: any = req?.query.filter ?? ''
    const sort: any = req?.query.sort ?? ''
    const param: any = req?.query.email ?? ''

    try {
        if (!page && !filter && !sort && !param) {
            return res.status(200).json({ users: [initialUser], pager: initialPager })
        }
        const users = await db.getUsers(page, filter, sort, param)
        return res.status(200).json({ users })
    } catch (e) {
        console.error(e)
        res.status(404).send({ users: [initialUser], pager: initialPager })
    }
}

const getUser = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const user = await db.getUser(id)
        if (user.length !== 0) {
            return res.status(200).json({ data: user })
        } else {
            return res.status(404).json({ message: 'User not found' })
        }
    } catch (e) {
        console.error(e)
        res.status(400).send()
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const user = await db.getUser(id)
        if (user.length == 0) {
            return res.status(404).send({ message: "Doesn't exist this user" })
        }
        const deletedUser = await db.deleteUser(id)
        return res.status(200).json({ data: deletedUser })
    } catch (e) {
        console.error(e)
        res.status(400).send()
    }
}

const createUser = async (req: Request, res: Response) => {
    if (req.body === {} || req.body.id !== req.params.id) {
        return res.status(400).send({ message: 'Malformed data' })
    }
    const newUser = req.body
    try {
        await db.insertUser(newUser)
        return res.status(200).json({ data: newUser })
    } catch (e) {
        console.error(e)
        res.status(400).send()
    }
}

export { getUsers, getUser, deleteUser, createUser }
