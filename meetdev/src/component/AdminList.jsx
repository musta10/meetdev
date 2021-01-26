import React from 'react'
import '../assets/styles/adminList.scss'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import auth from './Auth'




const AdminList = () => {
    let history = useHistory()

    function addEvent () {
      auth.loginAdmin(() =>{
        history.push("/addEvent");
      })
    }

   
        return(
            <>
            <p>Hello</p>
            <h1>Admin</h1>
            <Button onClick={addEvent} variant="primary">
           Ajoute un evenement
          </Button>
          </>
        )
}

export default AdminList;