import express from 'express'
import userRoutes from './users'

function setupAllRoutes(app:any) {
    const userRouter = express.Router()
    userRoutes(userRouter)
    app.use('/api/users', userRouter)
}

export default setupAllRoutes;