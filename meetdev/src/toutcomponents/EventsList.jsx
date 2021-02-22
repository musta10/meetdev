import React from 'react'
import Nav from '../component/Nav'
import '../assets/styles/events.scss'
import {useSelector} from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
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
                <Moment style={{ color: "#d63031" }} format="YYYY/MM/DD">
                  {elem.date}
                </Moment>

                <p>{elem.description}</p>
              </div>
              <div className="edit-icons">
                <AiFillEdit
                  className="separ"
                  color="#0984e3"
                  size={40}
                />
                <AiFillDelete color="#808080" size={40} />
              </div>
            </article>
          );
        })}
    </div>
    </>
)
}

export default Events;