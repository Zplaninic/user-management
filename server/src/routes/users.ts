import { Router } from 'express'
import * as userController from '../controllers/users'

function userRoutes(router: Router): void {
    router.route('/').get(userController.getUsers)

    router
        .route('/:id')
        .get(userController.getUser)
        .delete(userController.deleteUser)
        .post(userController.createUser)
}

export default userRoutes
