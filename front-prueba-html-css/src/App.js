
import React, {useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'; // {crar rutas Url, Especificar rutas}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import Container from './componentes/Container';
import Header from './componentes/Header'
import Inicio from './componentes/Inicio';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Question from './componentes/Question';
import Side from './componentes/Side';

function App() {
  const [conectado, setConectado] = useState(false);
  const acceder=(estado)=>{
    setConectado(estado)
    }

       return (   
       
            <Router>
              {/*
             {conectado ? <Question />: <Side acceder={acceder} />}
               */}

              <Route path="/" exact component={Inicio} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Question" component={Question} />
              <Route path="/Side" component={Side} />
                {/*<Route path="/Side/:id" /> para enviar parámetros */}
            </Router>            
      );
    }
export default App;
