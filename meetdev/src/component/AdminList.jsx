import React from 'react'
import '../assets/styles/adminList.scss'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';
import auth from './Auth'
// import 'moment/locale/fr'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import {useSelector} from 'react-redux'




const AdminList = () => {
    const events = useSelector(state => state.eventsReducer.events )
    console.log(events)
    

    let history = useHistory()
    function addEvent () {
      auth.loginAdmin(() =>{

  // RECUPERE EVENTS DEL STORE 
        
        history.push("/addEvent");
      })
    }


   
        return(
          <>
          <div>
              <h4 style={{textAlign: 'center', marginTop: 20}}>Evenements</h4>
              <div className="button">
              <Button className="add_button" onClick={addEvent} variant="primary">
             Ajouter un évènement
            </Button>
            </div>
            {events.map((elem, index) => {
              return (
                <article key={index} className="card_event">
                  <div className="date-information">
                  <Moment style={{color: "#d63031"}} format="YYYY/MM/DD">
                  {elem.date} 
            </Moment>
                  
                  <p>{elem.description}</p>
                  </div>
                  <div className="edit-icons">
                  <AiFillEdit className="separ" color="#0984e3" size={40} /> 
                  <AiFillDelete color="#808080" size={40} /> 
                  </div>
                </article>
              )  
            })}
            
           
          </div>
            </>
          
        )}

export default AdminList;