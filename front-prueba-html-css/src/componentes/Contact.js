import React, { useRef, useState, Component } from "react";
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import Side from '../componentes/Side'


export default class Contact extends Component {
    render() {
        return (
            <div>

                <Header />
                <div id="container">
                    <Side></Side>
                    <div id="principal">


                    <h1>Contáctenos</h1><br />
                        <form>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="id" class="form-label">Número de IDentificación <span class="asterisco"> * </span> </label>
                                        <input type="text" class="form-control" id="id" placeholder="Identificación" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="names" class="form-label">Nombre y Apaellidos <span class="asterisco"> * </span></label>
                                        <input type="text" class="form-control" id="names" placeholder="Nombres y Apellidos" />
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="cel" class="form-label">Número Celular <span class="asterisco"> * </span> </label>
                                        <input type="text" class="form-control" id="cel" placeholder="Número celular" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email <span class="asterisco"> * </span></label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="email" />
                                        <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="area" class="form-label">Área/Operación <span class="asterisco"> * </span> </label>
                                        <input type="text" class="form-control" id="area" placeholder="Área/Operación" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="cargo" class="form-label">Cargo <span class="asterisco"> * </span> </label>
                                        <input type="text" class="form-control" id="cargo" placeholder="Cargo" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="ubicacion" class="form-label">Indícanos donde te encuentras <span class="asterisco"> * </span> </label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Desplegar Menú</option>
                                            <option value="1">Amazonas</option>
                                            <option value="2">Antioquia</option>
                                            <option value="3">Arauca</option>
                                            <option value="4">Atlántico</option>
                                            <option value="5">Bogotá</option>
                                            <option value="6">Bolivar</option>
                                            <option value="7">Caldas</option>
                                            <option value="8">Cauca</option>
                                            <option value="9">Chocó</option>
                                            <option value="10">Guaviare</option>
                                            <option value="11">Huila</option>
                                            <option value="12">Magdalena</option>
                                            <option value="13">Putumayo</option>
                                            <option value="14">Santader</option>
                                            <option value="15">Sucre</option>
                                            <option value="16">Tolima</option>
                                            <option value="17">Vaupés</option>
                                            <option value="18">Vichada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="horario" class="form-label">Horarío en que te podemos contactar <span class="asterisco"> * </span> </label><br />


                                        <div class="row">
                                            <div class="col">
                                                <input type="time" id="time"></input>
                                            </div>

                                            <div class="col">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Día</option>
                                                    <option value="1">Lunes</option>
                                                    <option value="2">Martes</option>
                                                    <option value="3">Miercoles</option>
                                                    <option value="5">Jueves</option>
                                                    <option value="6">Viernes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </form>
                        <button type="submit" class="boton boton-verde">Enviar</button>



                    </div>

                    <div class="clearfix">
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
