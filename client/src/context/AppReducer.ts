
export default (state:any, action:any) => {

    switch(action.type) {
        case 'GET_USERS': 
            return {
                ...state,
                loading: false,
                reload: false,
                users: action.payload.users
            }
        case 'ADD_USER': 

            return {
                ...state,
                reload: true
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}