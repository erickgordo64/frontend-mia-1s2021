import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/inicio"><i className="material-icons">Bienvenido al sistemas de apuestas online mas grande la FIUSAC </i></Link>
 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
    }
}
