import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class Recuperar extends Component {

    state = {
        form: {
            Username: "",
            Password: ""
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        var nom = document.getElementById('usuario').value;
        console.log(nom)
        const res = await axios.put('http://localhost:4000/reccontra', { correo: nom})
            .then(response => {
                return response.data;
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
                            <h2>RECUPERAR CONTRASEÑA</h2>
                            <br />
                            <br />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <h5>correo</h5>
                                    <input id="usuario" className="form-control" type="text" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>ENVIAR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}