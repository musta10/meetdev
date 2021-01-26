import React from 'react'
import '../assets/styles/adminList.scss'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import auth from './Auth'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";



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
              <div>
              <p>05/12/2020</p>
              <p>concert jul a paris</p>
              </div>
              <div>
              <AiFillEdit color="grey" size={40} /> 
              <AiFillDelete color="red" size={40} /> 
              </div>
            </article>
            <Button className="add_button" onClick={addEvent} variant="primary">
           Ajouter un évènement
          </Button>
          </>
        )
}

export default AdminList;