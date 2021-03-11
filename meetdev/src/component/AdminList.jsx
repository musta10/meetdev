import React from "react";
import "../assets/styles/adminList.scss";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import Moment from "react-moment";
import auth from "./Auth";
import 'moment/locale/fr';
import Axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch} from "react-redux";
import {editEvent} from '../store/actions/actionsEvent'

const AdminList = () => {

  const events = useSelector((state) => state.eventsReducer.events);
  console.log(events);
  const dispatch = useDispatch()

  let history = useHistory();
  function addEvent() {
    auth.loginAdmin(() => {
      // RECUPERE EVENTS DEL STORE

      history.push("/addEvent");
    });
  }

  const deleteEvent = (id) => {
   Axios.delete(`http://localhost:4000/events/${id}`)
   .then((res) => {
   
    dispatch(editEvent(events.filter(a => a.id !== id)))
   })

  }

  return (
    <>
      <div>
        <h4 style={{ textAlign: "center", marginTop: 20 }}>Evenements</h4>
        <div className="button">
          <Button className="add_button" onClick={addEvent} variant="primary">
            Ajouter un évènement
          </Button>
        </div>
        {events.map((elem, index) => {
          return (
            <article key={index} className="card_event">
              <div className="date-information">
                <Moment style={{ color: "#d63031" }} format="DD/MM/YYYY">
                  {elem.date}
                </Moment>

                <p>{elem.description}</p>
              </div>
              <div className="edit-icons">
                <Link    to={`/editEvent/${elem.id}`} >
                <AiFillEdit
                  className="separ"
                  color="#0984e3"
                  size={40}
                />
                </Link>
                <AiFillDelete onClick={()=> deleteEvent(elem.id)} color="#808080" size={40} />
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};
export default AdminList;
