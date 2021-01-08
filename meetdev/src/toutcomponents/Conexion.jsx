import React, { useState } from "react";
import "../assets/styles/conexion.scss";
import Axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Conexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const conexion = () =>{
    Axios.post('http://localhost:4000/signIn', {
      email: email,
      password: password,
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
      <Form onSubmit={handleData} className="conexion">
        <Form.Group controlId="formGroupEmail">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inputs"
            name="email"
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
            name="password"
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Group>
        <div className="buttons">
          <Button  onClick={conexion} className="btn-block bouton-login">Connexion</Button>
          <Button className="bouton-inscription">créer une compte</Button>
        </div>
      </Form>
    </div>
  );
};
export default Conexion;
