import db from '../database/utils'
import { Request, Response } from 'express'


const getUsers = async (req: Request, res: Response) =>  {
    try {
        const users = await db.getUsers()
        if(users.length !== 0) {
            return res.status(200).json({ data: users })
        } else {
            return res.status(200).json({message: "No users in database"})
        }
    } catch(e) {
        console.error(e)
        res.status(404).send()
    } 
}

const getUser = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const user = await db.getUser(id)
        if(user.length !== 0) {
            return res.status(200).json({data: user})
        } else {
            return res.status(404).json({message: "User not found"})
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
        if(user.length == 0) {
            return res.status(404).send({message: "Doesn't exist this user"})
        }
        const deletedUser = await db.deleteUser(id)
        return res.status(200).json({data: deletedUser})
    } catch (e) {
        console.error(e)
        res.status(400).send()
    }
}

const createUser = async (req: Request, res: Response) => {
    console.log(req.body)
    if(req.body === {} || req.body.id !== req.params.id) {
        return res.status(400).send({message: "Malformed data"})
    }
    const newUser = req.body
    try {
        await db.insertUser(newUser)
        return res.status(200).json({data: newUser})
    } catch (e) {
        console.error(e)
        res.status(400).send()
    }
}

export {getUsers, getUser, deleteUser, createUser}