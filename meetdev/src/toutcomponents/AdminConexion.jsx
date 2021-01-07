import React from 'react';
import "../assets/styles/admin.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AdminConexion ()  {    
    return (
        <Form className="formulario">
            <h2>Conexion Admin</h2>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email" />
  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="prénom" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="mot de passe" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Conexion
  </Button>
</Form>
    )

}
export default AdminConexion;