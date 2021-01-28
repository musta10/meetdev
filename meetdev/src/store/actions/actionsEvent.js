
export const listEvents = (events) => dispatch => {
    dispatch({type: "LIST-EVENTS" , events })
}

export const addEvent = (event) => dispatch => {
    dispatch({type: "ADD-EVENT" , event })
}


// export const addEvent = (event) => ({
//     type: "ADD-EVENT",
//     event: event
// })

