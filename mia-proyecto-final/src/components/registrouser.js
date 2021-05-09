import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'

export default class Registro extends Component {
    onSubmitcolaborador = async (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <center>
                    <div>
                        <br />
                        <br />
                        <div className="col-md-5">
                            <div className="card text-white bg-primary mb-3">
                                <div class="card-header">REGISTRO USUARIO</div>
                                <br />
                                <br />
                                <div class="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <h5>USERNAME</h5>
                                        <input
                                            id="user"
                                            type="text"
                                            className="form-control"
                                        />
                                        <h5>PASSWORD</h5>
                                        <input
                                            id="contrasena"
                                            type="password"
                                            className="form-control"
                                        />
                                        <h5>NOMBRE</h5>
                                        <input
                                            id="nombre"
                                            type="text"
                                            className="form-control"
                                        />
                                        <h5>APELLIDO</h5>
                                        <input
                                            id="apellido"
                                            type="text"
                                            className="form-control"
                                        />
                                        <h5>Fecha de nacimiento</h5>
                                        <input
                                            id="fecha"
                                            type="date"
                                            className="form-control"
                                        />
                                        <h5>Correo electronico</h5>
                                        <input
                                            id="correo"
                                            type="text"
                                            className="form-control"
                                        />
                                        <br></br>
                                        <br></br>
                                        <button type="submit" className="btn btn-danger" onClick={(e) => this.onSubmitcolaborador(e)}>Registrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}