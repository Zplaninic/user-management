import * as userController from '../controllers/users'

function userRoutes(router:any) {   
    router 
        .route('/')
        .get(userController.getUsers)
    
    router 
        .route('/:id')
        .get(userController.getUser)
        .delete(userController.deleteUser)
        .post(userController.createUser)

    // router.get('/:id', userController.getUser)

    // router.delete('/:id', userController.deleteUser)

    // router.post('/:id', userController.createUser)

    //     // router.get('/', userController.getUsers)

}

export default userRoutes;
