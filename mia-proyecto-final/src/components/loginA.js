import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import { withCookies, Cookies } from 'react-cookie'
import Naviga from './navigate'

export default class login extends Component {

    static protoTypex = {
        cookies: instanceOf(Cookies).isRequired
    }

    onSubmit = async (e) => {
        e.preventDefault();

        this.props.history.push('/estuiante')
    }

    render() {
        return (
            <center>
                <div>
                    <Naviga></Naviga>
                    <br/>
                    <br/>
                    <div className="col-md-5">
                        <div className="card card-body">
                            <H2>LOGIN ADMIN</H2>
                            <br></br>
                            <br></br>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <h5>Usuario</h5>
                                    <input id="usuario" className="form-control" type="text"/>
                                    <h5>Contraseña</h5>
                                    <input id="contraseña" className="form-control" type="password"/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Ingresar</button>
                            </form>
                            <Link to="/registro" className="nav-link"><p>Registrar Usuario</p></Link>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}