import React from 'react';
import "../assets/styles/admin.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AdminConexion ()  {    
    return (
      <div className="formulario">
        <Form>
            <h2>Conexion Admin</h2>
  <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" placeholder="prénom" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="mot de passe" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Conexion
  </Button>
</Form>
</div>
    )

}
export default AdminConexion;