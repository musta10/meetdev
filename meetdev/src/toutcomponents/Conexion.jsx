import React from "react";
import "../styles/conexion.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Conexion() {
  return (
    <div className="container">
      <h1>Meet Dev</h1>
      <Form className="conexion">
        <Form.Group controlId="formGroupEmail">
          <input className="inputs"
           name="email" 
           type="email" 
           placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <input className="inputs"
          name="password" 
          type="password"
           placeholder="Mot de passe" />
        </Form.Group>
        <div className="buttons">
          <Button className="btn-block bouton-login">Connexion</Button>
          <Button className="bouton-inscription">créer une compte</Button>
        </div>
      </Form>
    </div>
  );
}
export default Conexion;
