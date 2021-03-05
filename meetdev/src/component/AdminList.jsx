import React, { useState } from "react";
import "../assets/styles/adminList.scss";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import Modal from "react-bootstrap/Modal";
import auth from "./Auth";
import Form from "react-bootstrap/Form";
// import 'moment/locale/fr'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

const AdminList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const events = useSelector((state) => state.eventsReducer.events);
  console.log(events);

  let history = useHistory();
  function addEvent() {
    auth.loginAdmin(() => {
      // RECUPERE EVENTS DEL STORE

      history.push("/addEvent");
    });
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
                <AiFillEdit
                  onClick={handleShow}
                  className="separ"
                  color="#0984e3"
                  size={40}
                />
                <AiFillDelete color="#808080" size={40} />
              </div>
            </article>
          );
        })}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier un évènement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description de l'événement"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date de l'événement</Form.Label>
                <Form.Control name="date" type="date" placeholder="date" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} >
              Modifier
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default AdminList;
