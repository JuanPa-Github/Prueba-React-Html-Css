
import React, { Component } from 'react'
import header from '../css/header.css'
import ReacLogo from '../images/LogoSemillero.jpg';
import { Link } from 'react-router-dom'



export default class Header extends Component {
    render() {
        return (
            <div>
                                          
                <header id="cabecera">

                    {/* Logo*/}
                    <div id="logo">
                    <img src={(ReacLogo)} alt="reactLogo"></img>
                        <a href="">Html y Css por Juan Pablo Ayala
                         </a>
                    </div>

                    {/* Menu */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">
                        <div className="container-fluid">
                            <a class="navbar-brand" href="#"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link class="nav-link active" to='/'>Inicio</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link active" to='/About'>Quienes Somos</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link active" to='/Question'>Preguntas Frecuentes</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link active" to='/Contact'>Contáctanos</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
            </div>
        )
    }
}
