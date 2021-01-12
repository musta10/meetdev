import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from 'axios'
import Button from "react-bootstrap/Button";
import "../assets/styles/conexion.scss";

const Inscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");


  const inscription = () =>{
    Axios.post('http://localhost:4000/signUp', {
      name: name,
      email: email,
      password: password,
      photo: photo,
    }).then((reponse)=>{
      console.log(reponse);
    })
  }

  const handleData = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="containers">
      <h1 className="myText">Meet Dev</h1>
      <Form className="conexion" onSubmit={handleData}>
        <Form.Group controlId="formGroupName">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="inputs"
            type="text"
            placeholder="Prénom"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inputs"
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="inputs"
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPhoto">
          <input
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
            className="inputs"
            type="text"
            placeholder="Photo Profile"
          />
        </Form.Group>
        <div className="buttons">
          <Button  onClick={inscription} className="bouton-inscription">créer une compte</Button>
          <Button className="btn-block bouton-login">Connexion</Button>
        </div>
      </Form>
    </div>
  );
};

export default Inscription;
