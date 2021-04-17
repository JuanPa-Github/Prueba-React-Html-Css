import React, { useRef, useState, Component } from "react";
import ReacLogo from '../images/react-logo.png';
import Side from '../componentes/Side'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

export default class Inicio extends Component {
    render() {
        return (
            <div>
                <Header />

                <div id="container">
                    <Side></Side>
                    <div id="principal">
                        <div id="inicio">
                            <h1>React</h1>
                            <h3>Una biblioteca de JavaScript para construir interfaces de usuario</h3>
                            
                            <img src={(ReacLogo)} alt="reactLogo"></img>

                            <h2>Declarativo</h2>
                            <p>
                                React te ayuda a crear interfaces de usuario interactivas de forma sencilla. 
                                Diseña vistas simples para cada estado en tu aplicación, y React se encargará de 
                                actualizar y renderizar de manera eficiente los componentes correctos cuando los 
                                datos cambien.
                            </p>

                            <p>
                            React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas 
                            simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de 
                            manera eficiente los componentes correctos cuando los datos cambien.
                            Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de 
                            depurar.
                            
                            </p>

                            
                            <h2>Basado en componentes</h2>
                            <p>
                                Crea componentes encapsulados que manejen su propio estado, y conviértelos en 
                                interfaces de usuario complejas. Ya que la lógica de los componentes está escrita en 
                                JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado 
                                fuera del DOM.
                            </p>

                            <h2>Aprende una vez, escríbelo donde sea</h2>
                            <p>
                                En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás 
                                desarrollar nuevas características sin necesidad de volver a escribir el código existente.
                            </p>

                            <p>
                                React puede también renderizar desde el servidor usando Node, así como potencializar 
                                aplicaciones móviles usando React Native.
                            </p>

                            <p id="copyright">Reproducido de: https://es.reactjs.org/</p>
                        </div>
                    </div>
                    <div class="clearfix">
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
