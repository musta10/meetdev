import React, { useState } from "react";
import "../assets/styles/conexion.scss";
import Axios from "axios";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";
// import { useForm } from 'react-hook-form'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import auth from '../component/Auth'
import {signIn} from '../store/actions/actionUser'
import { useDispatch } from 'react-redux'



const Conexion = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
      e.preventDefault()
      Axios.post('http://localhost:4000/signIn', {
        email: email,
        password: password,
      }).then((reponse)=>{
        let decoded = jwt.decode(reponse.data.token)
          localStorage.setItem('id', decoded.id)
          localStorage.setItem('name', decoded.name)
          localStorage.setItem('token', reponse.data.token) 
          localStorage.setItem('email', decoded.email)
        
        auth.login(() =>{
        dispatch(signIn({...decoded, token : reponse.data.token}))
          props.history.push('/home')
        })
        
      }).catch(err => 
        setMsg(err.response.data)
      )
}

  let history = useHistory()
  function handleClick() {
    history.push("/Inscription");
  }

  return (
    <div className="containers">
      <h1 className="myText">Meet Dev</h1>
     
      <Form onSubmit={handleSubmit} className="conexion">
        <Form.Group>
        <div style={{color: 'red'}}>{msg}</div>
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
        <Form.Group>
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
          <Button  type="submit" className="btn-block bouton-login">Connexion</Button>
          <Button onClick={handleClick} className="bouton-inscription">créer une compte</Button>
        </div>
      </Form>
    </div>
  );
};
export default Conexion;
