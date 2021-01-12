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
          <h1 class="separ">Meet Dev</h1>
          <p>
            Vous Trouvez la liste des événements choisissez le meilleur
            événement qui vous convient
          </p>
        </div>
      </section>
      <section className="portada">
        <img src={imgEvent2} alt="evenement" />
        <div className="hover">
          <h1 class="separ">Meet Dev</h1>
          <p>
            Vous Trouverez la liste des événements choisissez le meilleur
            événement qui vous convient
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
        

    </div>
    </>
    
  );
}

export default Home;
