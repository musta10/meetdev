import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import imageUser from '../assets/img/event2.jfif'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";


const userProfile = () => {
  let history = useHistory();

  function Homeclick() {
    history.push("/home");
  }
  
    return (
        <Card style={{ width: '18rem' }}>
        <h3>Votre Profile</h3>
        <Card.Header className="logos"> <img style={{width:80, height:80, borderRadius: '50%'}} src={imageUser} alt=""/></Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Prénom</ListGroup.Item>
          <ListGroup.Item>Email</ListGroup.Item>
          <ListGroup.Item>Mot de passe</ListGroup.Item>
          <Button  onClick={Homeclick} className="btn-block bouton-login">Page Accueil</Button>
        </ListGroup>
      </Card>
        
    )

}

export default userProfile;