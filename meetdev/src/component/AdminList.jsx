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

// RECUPERE EVENTS DEL STORE 

        history.push("/addEvent");
      })
    }

   
        return(
            <>
            <h4 style={{textAlign: 'center', marginTop: 20}}>Evenements</h4>
            {}  
              <article className="card_event">
                <div className="date-information">
                <strong>05/12/2020</strong>
                <p>concert jul a paris</p>
                </div>
                <div className="edit-icons">
                <AiFillEdit className="separ" color="#0984e3" size={40} /> 
                <AiFillDelete color="#808080" size={40} /> 
                </div>
              </article>
            <div className="button">
            <Button className="add_button" onClick={addEvent} variant="primary">
           Ajouter un évènement
          </Button>
          </div>
          </>
        )
}

export default AdminList;