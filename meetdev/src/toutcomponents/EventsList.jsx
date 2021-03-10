import React, { useState, useEffect } from 'react'
import Nav from '../component/Nav'
import '../assets/styles/events.scss'
import {useSelector} from 'react-redux'
import { MdModeComment } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import Moment from "react-moment";
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux'

const Events = () => {
    const [show, setShow]=useState(false)
    const dispatch = useDispatch()
    const events = useSelector(state => state.eventsReducer.events )
    console.log(events)



    useEffect(() => {
    }, [events]);
return(
    <>
    <Nav />
    <p style={{marginTop: 20, textAlign:'center'}}>Événements a Paris, Ille De France</p>
    <div>
    {events.map((elem, index) => {
          return (
            <article key={index} className="card_evenement d-flex flex-column p-3 mb-3 ">
                <div className="d-flex justify-content-around w-100">
              <div className="date">
                <Moment style={{ color: "#d63031" }} format="DD/MM/YYYY">
                  {elem.date}
                </Moment>

                <p>{elem.description}</p>
              </div>
              <div className="edit-icons">
             <MdEvent
              className="separ"
              color="#000000"
              size={30} />
                <MdModeComment
                  className="separ"
                  color="#000000"
                  size={30}
                />
                <p className="comentaire" onClick={() =>setShow(!show)}>commenter</p>
              </div>
              </div>
              {
        show?
        <Form.Control className="commentaire" type="text" placeholder="Votre commentaire" />:null
      }
            </article>
          );
        })}
    </div>
      
    </>
)
}

export default Events;