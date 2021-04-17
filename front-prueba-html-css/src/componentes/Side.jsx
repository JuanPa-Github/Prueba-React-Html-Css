import React, { useRef, useState, Component } from "react";
import { Link } from 'react-router-dom'
import '../css/side.css';
import '../css/container.css';
import About from './About'
const URL_LOGIN = "http://localhost/C-React/Semillero/back-prueba-html-css/login.php";





const enviarData = async(url, data) => {
    const resp = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await resp.json();
    return json;
}



export default function Side(props) {
    
    const [error, setError] = useState(null);
    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const [aprovado, setIn] = useState(null);

    const handleLogin = async()=> {
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        };
        //console.log(data);
        //enviarData(URL_LOGIN, data);
        const respuestaJson = await enviarData(URL_LOGIN, data);
        //console.log("Respuesta desde el evento", respuestaJson.conectado)
                //acceder = respuestaJson.conectado;
                //console.log("Valor de la variable acceder",acceder);
                //props = refAcceder;
        //props.acceder(respuestaJson.conectado);
        setError(respuestaJson.error); 
        setIn(respuestaJson.aprovado); 
                //return acceder;  
    };

    return (
        <aside id="sidebar">
            <div id="buscador" class="bloque">
                <div className="login" style={{ borderRadius: '5px' }}>
                    <div className="row">
                        <div className="card-header text-center" style={{ padding: '1px' }} >
                            <h3>Login</h3>
                        </div>
                        <div className="card-body" >
                            <div className="input-group mb-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1" style={{ padding: '3px' }}>
                                        📧
                                                        </span>
                                </div><input type="email"
                                    className="form-control"
                                    placeholder="email"
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario} />
                            </div>

                             <div className="input-group mb-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon2" style={{ padding: '3px' }}>
                                        🔒
                                                        </span>
                                </div><input type="password"
                                    className="form-control"
                                    placeholder="clave"
                                    aria-label="clave"
                                    aria-describedby="basic-addon2"
                                    ref={refClave} />
                            </div>

                            {
                                error &&
                                <div className="alert alert-danger" >
                                    {error}
                                </div> ||

                                aprovado &&
                                <div className="alert alert-primary">
                                    <strong><h4>
                                        {aprovado}
                                        </h4></strong>
                                </div>
                            }

                            <button onClick={handleLogin}
                                className="col-md-12 btn btn-primary btn-block">Acceder</button>
                        </div>

                        <div className="card-footer">
                                <span>¿Olvidó su contraseña?</span><br />
                            <a href="http://">Recuperar</a>
                        </div>

                    </div>
                </div>                           

            </div>
        </aside>
        
    )
}
