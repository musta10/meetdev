
export const listEvents = (events) => dispatch => {
    dispatch({type: "LIST-EVENTS" , events })
}

export const addEvent = (event) => dispatch => {
    console.log(event);
    dispatch({type: "ADD-EVENT" , event })
}
export const editEvent = (event) => dispatch => {
    console.log(event);
    dispatch({type: "EDIT-EVENT" , event })
}
export const deleteEvent = (event) => dispatch => {
    console.log(event);
    dispatch({type: "DELETE-EVENT" , event })
}



// export const addEvent = (event) => ({
//     type: "ADD-EVENT",
//     event: event
// })

