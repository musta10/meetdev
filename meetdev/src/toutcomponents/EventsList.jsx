import React from 'react'
import Nav from '../component/Nav'
import '../assets/styles/events.scss'
import {useSelector} from 'react-redux'

const Events = () => {

    const events = useSelector(state => state.eventsReducer.events )
    console.log(events)
//// ICI LA LISTE EVENTS .MAP



return(
    <>
    <Nav />
    <p style={{marginTop: 20, textAlign:'center'}}>Événements a Paris, Ille De France</p>
    </>
)
}

export default Events;