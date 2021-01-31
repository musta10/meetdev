
const initialState = {
    events: [],
    user_commentaires: []
}


const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST-EVENTS": 
            return {
                ...state,
                events: action.events
            };
        case "ADD-EVENT": 
            return {
                ...state,
                events: [...state.events, action.event]
            }
            case "EDIT-EVENT": 
            return {
                ...state,
                events: [...state.events, action.event]
            }
                case "USER-COMMENTAIRES":
            return {
                ...state,
                user_commentaires: [...state.user_commentaires, action.user_commentaires]
            }
        default: {
            return {
                ...state
            };
        }
    }
}

export default eventsReducer;  