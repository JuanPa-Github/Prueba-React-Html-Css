import React, { useRef, useState, Component } from "react";
import about from '../css/about.css';
import Side from '../componentes/Side'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'

export default class About extends Component {
    render() {
        return (

            <div>
                <Header />
                <div id="container">
                    <Side></Side>
                    <div id="principal">
                        <h1>Quienes Somos</h1>

                        <h2>Misión</h2>
                        <div id="body">
                            <p>La Misión de una empresa describe la actividad, dicha identidad es clave en la  organización para
                            el logro de su visión, que son las metas o logros  que constituyen la razón de ser de la empresa.
                            </p>

                            <p>preguntas para que te ayuden a dar forma a la misión de una empresa.</p>
                            <ol>
                                <li>¿Qué es lo que quieres ofrecer?</li>
                                <li>¿Por qué quieres crear este negocio?</li>
                                <li>¿Cuál es el perfil de usuario que quieres atraer?</li>
                                <li>¿Qué imagen de negocio quieres comunicar?</li>
                                <li>¿Qué factores determinan el precio y la calidad de tus productos y/o servicios? </li>
                                <li>¿Qué relación tendrás con tus empleados?</li>
                                <li>¿Cuál es tu aspecto diferenciador que te destaca sobre tu competencia?</li>
                                <li>¿Nuestro negocio puede ser realmente competitivo?</li>
                            </ol>
                        </div>

                        <h2>Visión</h2>
                        <div id="body">
                            <p>
                            La Visión de una empresa podríamos denominarlo como el SUEÑO, es una declaración de aspiraciones
                            de la empresa a mediano o largo plazo, es la imagen a futuro de cómo deseamos que sea la empresa
                            más adelante. Su propósito es ser el motor y la guía de la organización para poder alcanzar el
                            estado deseado.
                            </p>

                        <p>preguntas para que te ayuden a dar forma a la misión de una empresa.</p>
                        <ol>
                            <li>¿Cómo será tu empresa en unos años?</li>
                            <li>¿Cuáles son tus metas a corto, medio y largo plazo?</li>
                            <li>¿Cuál serán los valores y actitudes clave de la empresa?</li>
                            <li>¿Qué quieres que opinen en un futuro las personas de tu empresa?</li>
                            <li>¿Qué aspectos para crecer te gustaría conseguir?</li>
                        </ol>
                        </div>
                        <h2>Historia</h2>
                        <div id="body">
                        <p>Cualquier empresa tiene una historia que contar, algo que conecte a la marca con los 
                            consumidores. Como dueño de un negocio en la era de las redes sociales tienes una gran 
                            oportunidad de conseguir clientes leales dándole un nuevo enfoque a la forma en que 
                            expresas los valores de tu empresa. Para atraer y retener clientes, debes crear un 
                            lazo emocional. Te compartimos tres tips para expresar la historia de tu empresa y ‘humanizar’ 
                            tu marca: 
                        </p>
                        <ol>
                            <li>Expande tu idea de valor</li>
                            <li>Establece un lenguaje común</li>
                            <li>Dale a tu marca una voz humana</li>
                        </ol>
                        </div>
                        <p id="copyright">Reproducido de: https://www.marketingandweb.es/</p>
                    </div>
                    
                    <div class="clearfix">
                    </div>
                    
                </div>
               

                <Footer />
            </div>



        )
    }
}

