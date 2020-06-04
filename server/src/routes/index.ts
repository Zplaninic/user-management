import express, { Router } from 'express'
import userRoutes from './users'

function setupAllRoutes(app: any) {
    const userRouter: Router = express.Router()
    userRoutes(userRouter)
    app.use('/api/users', userRouter)
}

export default setupAllRoutes
