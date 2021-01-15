import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import imageUser from '../assets/img/event2.jfif'

const userProfile = () => {
    return (
    
        <Card style={{ width: '18rem' }}>
        <h3>Votre Profile</h3>
        <Card.Header> <img style={{width:80, height:80, borderRadius: '50%'}} src={imageUser} alt=""/> </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Prénom</ListGroup.Item>
          <ListGroup.Item>Email</ListGroup.Item>
          <ListGroup.Item>Mot de passe</ListGroup.Item>
        </ListGroup>
      </Card>
    )

}

export default userProfile;