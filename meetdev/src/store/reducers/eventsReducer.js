
const initialState = {
    events: []
}


const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST-EVENTS": 
            return {
                ...state,
                events: [...state.events, action.event]
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

export default eventsReducer   