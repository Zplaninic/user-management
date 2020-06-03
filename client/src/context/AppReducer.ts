
export default (state:any, action:any) => {
    // console.log(action.type)
    // console.log(state)
    switch(action.type) {
        case 'GET_USERS': 
            return {
                ...state,
                loading: false,
                reload: false,
                users: action.payload.users
            }
        case 'ADD_USER': 
            console.log(state)
            const nesto = {
                    users: [...state.users.users, action.payload.data],
                    pager: { ...state.users.pager }
            }
            console.log(nesto)
            return {
                ...state,
                reload: true
                // users: { 
                //     users: [...state.users.users, action.payload.data],
                //     pager: { ...state.users.pager }        
                // }
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