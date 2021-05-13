import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import Navigate from './navigate'

export default class Deportes extends Component {

    state = {
        alumnos: []
    }

    async componentDidMount() {

        this.getTemporadas();
    }

    onSubmitJornada = async (ID) =>{
        window.location.href = "/jornadas/"+ID;
    }

    onSubmitcolaborador = async (e) => {
        e.preventDefault();
        var nom = document.getElementById('nombre').value;
        var fechi = document.getElementById('imagen').value;
        var fechf = document.getElementById('color').value;
        const res = await axios.post('http://localhost:4000/addDeporte', {
            nombre: nom,
            imagen: fechi,
            color: fechf
        });
        alert(res.data);
    }

    getTemporadas = async () => {
        const res = await axios.get('http://localhost:4000/deportes');
        this.setState({
            alumnos: res.data
        });
        console.log(res.data);
    }

    render() {
        return (
            <div>
                <Navigate />
                <br></br>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                        <h5 class="card-header">Agregar un Deporte</h5>
                            <div class="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <h5>Nombre deporte</h5>
                                    <input
                                        id="nombred"
                                        type="text"
                                        className="form-control"
                                    />
                                    <h5>imagen</h5>
                                    <input
                                        id="imagen"
                                        type="text"
                                        className="form-control"
                                    />
                                    <h5>color</h5>
                                    <input
                                        id="color"
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
                    <div class="col-sm-6">
                        <div class="card">
                        <h5 class="card-header">Temporadas registradas</h5>
                            <div class="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">nombre</th>
                                            <th scope="col">imagen</th>
                                            <th scope="col">color</th>
                                            <th scope="col">estado</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.alumnos.map(post => {
                                                return <tr key={post.iddeporte}>
                                                    <th scope="row">{post.iddeporte}</th>
                                                    <td>{post.Nombre}</td>
                                                    <td>{post.imagen}</td>
                                                    <td>{post.color}</td>
                                                    <td>
                                                        <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitJornada(post.idtemporada)}>Jornadas</button>
                                                        <button type="submit" className="btn btn-danger" onClick={(e) => this.onSubmitJornada(post.idtemporada)}>Update</button>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}