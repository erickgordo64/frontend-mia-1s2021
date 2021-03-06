import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import Naviga from './navigate'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class login extends Component {

    state = {
        form: {
            Username: "",
            Password: ""
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        var nom = document.getElementById('usuario').value;
        var des = document.getElementById('contraseña').value;

        const res = await axios.post('http://localhost:4000/login', { Username: nom, Password: des })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.ID === 0) {
                    alert("usuario incorrecto")
                } else {
                    cookies.set('id', response.ID, { path: "/" });
                    cookies.set('username', response.Username, { path: "/" });
                    alert(`Bienvenido ${response.Username}`);
                    window.location.href = "./DashC";
                }

            })
            .catch(error => {
                console.log(error)
            });
        //this.props.history.push('/estuiante')
    }

    componentDidMount() {
        if (cookies.get('id')) {
            window.location.href = "./estudiante";
        }
    }

    render() {
        return (
            <center>
                <div>
                    <br />
                    <br />
                    <div className="col-md-5">
                        <div className="card card-body">
                            <h2>login USUARIO</h2>
                            <br />
                            <br />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <h5>Usuario</h5>
                                    <input id="usuario" className="form-control" type="text" />
                                    <h5>Contraseña</h5>
                                    <input id="contraseña" className="form-control" type="password" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Ingresar</button>
                            </form>
                            <Link to="/registro" className="nav-link"><p>Registrar Usuario</p></Link>
                            <Link to="/loginA" className="nav-link"><p>Login Admin</p></Link>
                            <Link to="/recuperar" className="nav-link"><p>recuperar contraseña</p></Link>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}