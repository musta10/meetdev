import React from "react";
import "../assets/styles/home.scss";
import Button from "react-bootstrap/Button";
import imgEvent from "../assets/img/event1.jpg";
import imgEvent2 from '../assets/img/event2.jfif'
import Nav from "../component/Nav";

const Home = () => {
  return (

      <>
      <Nav />
    <div className="container">
      <p>Événements a Paris, Ille De France</p>
      <article className="fleximg">
      <section className="portada">
        <img src={imgEvent} alt="evenement" />
        <div className="hover">
          <h1 className="separ">Meet Dev</h1>
          <p>
            Vous Trouvez  tout la liste des Événements
          </p>
        </div>
      </section>
      <section className="portada">
        <img src={imgEvent2} alt="evenement" />
        <div className="hover">
          <h1 className="separ">Meet Dev</h1>
          <p>
            Vous Trouvez tout la liste des événements
          </p>
        </div>
      </section>
      </article>
      <div className="actualite">
        <p>Suivez toute l'actualité des événements</p>
        <Button className="boton-plus">En Savoir Plus</Button>
      </div>
    </div>
    <div className="information">
      <ul>
        <li>Poser des questions</li>
        <li>Différentes solutions</li>
        <li>Trouver des places(billets..)</li>
        <li>Rencontres</li>
      </ul>
        

    </div>
    </>
    
  );
}

export default Home;
