import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../assets/styles/profile.scss";
import YourProfile from "../component/YourProfile";



const Profile = () => {

  return (
    <div className="formulario">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="prénom" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="mot de passe" />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="text" placeholder="Votre Photo" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Modifier
        </Button>
      </Form>
      <YourProfile />
    </div>
  );
};

export default Profile;
