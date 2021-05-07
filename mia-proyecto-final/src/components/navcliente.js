import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class NavCliente extends Component {

    cerrarSesion = (e) => {
        cookies.remove('id', { path: "/" });
        cookies.remove('username', { path: "/" });
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="/DashC">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/DashC">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/DashA">Link</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/jornadas">Jornadas</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/resultados">Resultados</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/recompensas">Recompensas</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/deportes">Deportes</a>
                            </li>
                            <li>
                                <a class="nav-link" href="/reportes">Reportes</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-danger" onClick={(e) => this.cerrarSesion()}>logout</button>
                            </li>

                        </ul>
                    </div>

                </nav>

            </div>

        )
    }
}