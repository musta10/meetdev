import React from 'react'
import Nav from '../component/Nav'
import '../assets/styles/events.scss'
import {useSelector} from 'react-redux'
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegCalendarMinus } from "react-icons/fa";
import Moment from "react-moment";

const Events = () => {

    const events = useSelector(state => state.eventsReducer.events )
    console.log(events)
//// ICI LA LISTE EVENTS .MAP



return(
    <>
    <Nav />
    <p style={{marginTop: 20, textAlign:'center'}}>Événements a Paris, Ille De France</p>
    <div>
    {events.map((elem, index) => {
          return (
            <article key={index} className="card_evenement">
              <div className="date">
                <Moment style={{ color: "#d63031" }} format="DD/MM/YYYY">
                  {elem.date}
                </Moment>

                <p>{elem.description}</p>
              </div>
              <div className="edit-icons">
             <FaRegCalendarMinus
              className="separ"
              color="#000000"
              size={30} />
                <FaRegCommentAlt
                  className="separ"
                  color="#000000"
                  size={30}
                />
                <p>commenter</p>
              </div>
            </article>
          );
        })}
    </div>
    </>
)
}

export default Events;