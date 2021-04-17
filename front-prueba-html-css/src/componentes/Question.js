import React, { useRef, useState, Component } from "react";
import Footer from '../componentes/Footer'
import Side from '../componentes/Side'
import Header from "./Header";



export default class Question extends Component {
    render() {
        return (

            <div>
                <Header />
                <div id="container">
                    <Side></Side>
                    <div id="principal">
                        <h1>Preguntas Frecuentes</h1>

                        <div class="card" style={{ width: 'auto' }}>
                            {/*<div class="card-body">
                                </div>*/}
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <h4>¿Qué versiones de React incluyen Hooks?</h4>
                                    <p>Empezando con React 16.8.0, se incluye una implementación estable de Hooks para:</p>
                                    <ul>
                                        <li>React DOM</li>
                                        <li>React Native</li>
                                        <li>React DOM Server</li>
                                        <li>React Test Renderer</li>
                                        <li>React Shallow Renderer</li>
                                    </ul>
                                    <p>Nótese que para habilitar los Hooks, todos los paquetes de React deben
                                    estar en la versión 16.8.0 o superior. Los Hooks no van a funcionar si
                                    olvidas, por ejemplo, actualizar React DOM.React Native 0.59 y versiones
                                    superiores son compatibles con Hooks.
                                                </p>
                                </li>

                                <li class="list-group-item">
                                    <h4>¿Qué puedo hacer con Hooks que no pueda hacer con clases?</h4>
                                    <p>Los Hooks ofrecen una nueva, poderosa y expresiva forma de reusar
                                    funcionalidad entre componentes. La sección “Construyendo tus Propios
                                    Hooks” provee un vistazo a las posibilidades. Este artículo por uno de
                                    los miembros clave del equipo de React se adentra más en las nuevas
                                    capacidades que proveen los Hooks.
                                                </p>
                                </li>


                                <li class="list-group-item">
                                    <h4>¿Qué tanto de mi conocimiento de React se mantiene relevante?</h4>
                                    <p>Los Hooks son una manera más directa de usar la características de
                                    React que ya conoces — como el estado, ciclo de vida, contexto, y las
                                    referencias (refs). No cambian de manera fundamental el funcionamiento
                                    de React, y tu conocimiento de componentes, props, y el flujo de datos
                                    de arriba hacia abajo sigue siendo igual de relevante.
                                    Los Hooks tienen también su propia curva de aprendizaje. Si hay algo
                                    faltante en esta documentación, levanta un issue y trataremos de ayudar.
                                                </p>
                                </li>


                                <li class="list-group-item">
                                    <h4>¿Debería usar Hooks, clases, o una mezcla de ambos?</h4>
                                    <p>
                                        Cuando estés listo, te recomendamos empezar a usar Hooks en los nuevos
                                        componentes que escribas. Asegúrate que todo tu equipo esté de acuerdo en
                                        usarlos, y que estén familiarizados con esta documentación. No recomendamos
                                        reescribir tus clases existentes a menos de que hayas planeado reescribirlas
                                        de cualquier manera (por ejemplo para arreglar bugs).
                                        No puedes usar Hooks dentro de un componente de clase, pero definitivamente puedes
                                        mezclar componentes de clase y componentes de función con Hooks en un mismo árbol.
                                        Si un componente es una clase, o una función que utiliza Hooks es un detalle de implementación
                                        del Componente. A largo plazo, experamos que los Hooks sean la manera más usada de escribir
                                        Componentes de React.
                                                </p>
                                </li>


                                <li class="list-group-item">
                                    <h4>¿Cómo probar Componentes que usan Hooks?</h4>
                                    <p>
                                        Desde el punto de vista de React, un componente que use Hooks, sigue siendo un componente
                                        normal. Si las herramientas de prueba que utilizas no dependen de los mecanismos internos
                                        de React, probar los componentes que usen Hooks, no debería ser diferente de probar cualquier
                                        otro componente.
                                                </p>
                                </li>

                            </ul>
                            {/*<div class="card-body"></div>*/}

                        </div>
                        <p id="copyright">Reproducido de: https://es.reactjs.org/docs/</p>
                    </div>
                    <div class="clearfix"></div>
                </div>

                <Footer />
            </div>
        )
    }
}
