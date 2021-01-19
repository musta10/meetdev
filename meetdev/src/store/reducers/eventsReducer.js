
const initialState = {
    events: []
}


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-EVENTS": 
            return {
                ...state,
                events: action.events
            };
        case "ADD-EVENT": 
            return {
                ...state,
                events: [...state.events, action.event]
            };
        default: {
            return {
                ...state
            };
        }
    }
}

export default productsReducer   