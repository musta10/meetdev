import React, { useState } from "react";
import Axios from "axios";
import "../assets/styles/admin.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";




const AdminConexion = () =>  {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");    
  const [password, setPassword] = useState("");    

  let history = useHistory();

  const admin = () =>{
    console.log(name,email,password);
    Axios.post('http://localhost:4000/admin', {
      email: email,
      name: name,
      password: password,
    },
    
    {
      headers: {
          token: localStorage.getItem('token')
      }
  }
    
    ).then((reponse)=>{
      console.log(reponse);
      history.push("/addEvent");
    })
    .catch((err) => {
      console.log(err)
  })
  }

  const handleData = (e) =>{
    e.preventDefault()
  }

    return (
      <div className="formulario-admin">
        <Form onSubmit={handleData}>
            <h2>Conexion Admin</h2>
  <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control 
       onChange={(e) => {
        setEmail(e.target.value);
      }} 
      name="email"type="email" placeholder="email" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Prénom</Form.Label>
    <Form.Control
       onChange={(e) => {
        setName(e.target.value);
      }} name="name"type="text" placeholder="prénom" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control
       onChange={(e) => {
        setPassword(e.target.value);
      }} name="password" type="password" placeholder="mot de passe" />
  </Form.Group>
  <Button onClick={admin} variant="primary" type="submit">
    Conexion
  </Button>
  {/* <Button style={{marginLeft: 15}} variant="danger" type="submit">
  Déconnexion
  </Button> */}
</Form>
</div>
    )

}
export default AdminConexion;