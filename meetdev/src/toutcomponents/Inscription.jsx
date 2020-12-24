import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/inscription.scss";

function Inscription() {
  return (
    <div className="container">
      <h1>Meet Dev</h1>
      <Form className="conexion">
        <Form.Group controlId="formGroupName">
          <input
            className="inputs"
            name="name"
            type="text"
            placeholder="Prénom"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <input
            className="inputs"
            name="email"
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <input
            className="inputs"
            name="password"
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPhoto">
          <input
            className="inputs"
            name="photo"
            type="text"
            placeholder="Photo Profile"
          />
        </Form.Group>
        <div className="buttons">
          <Button className="btn-block bouton-login">Connexion</Button>
          <Button className="bouton-inscription">créer une compte</Button>
        </div>
      </Form>
    </div>
  );
}

export default Inscription;
