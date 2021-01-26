
// const initialState = {
//     token: "",
//     name: "",
//     email: "",
//     id: "",
//     // user_commentaires: []
// }

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGN-IN":
            return {
                ...state,
                user: action.user
            };
        case "SIGN-OUT": 
            return {
                ...state, 
                token: "",
                name: "",
                email: "",
                id: "",
            }
        // case "USER-COMMENTAIRES":
        //     return {
        //         ...state,
        //         user_commentaires: [...state.user_commentaires, action.user_commentaires]
        //     }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer;