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
            <h4 style={{textAlign: 'center', marginTop: 20}}>Evenements</h4>
            <article className="card_event">
              <p>05/12/2020</p>
              <p>concert jul a paris</p>
            </article>
            <Button onClick={addEvent} variant="primary">
           Ajoute un evenement
          </Button>
          </>
        )
}

export default AdminList;