
const initialState = {
    token: "",
    name: "",
    email: "",
    id: "",
    // user_commentaires: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN-IN":
            return {
                ...state,
                token: action.token,
                name: action.name,
                email: action.email,
                id: action.id
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