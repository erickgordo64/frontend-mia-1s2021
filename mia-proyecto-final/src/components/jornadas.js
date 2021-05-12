import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import Navigate from './navigate'

class Jorandas extends Component{
    
    state={
        id: this.props.match.params.ID,
        alumnos:[]
    }

    async componentDidMount(){
        
        this.getJornada();
    }

    getJornada = async () => {

        var id = this.state.id
        console.log(id)
        const res = await axios.get('http://localhost:4000/jornadas/'+this.state.id );
        this.setState({
            alumnos: res.data
        });
        console.log(res.data);
    }
    
    render(){
        
        return(
            
            <div>
                <Navigate></Navigate>
                <div class="card">
                        <h5 class="card-header">Temporadas registradas</h5>
                            <div class="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">nombre</th>
                                            <th scope="col">fecha inicio</th>
                                            <th scope="col">fecha fin</th>
                                            <th scope="col">estado</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.alumnos.map(post => {
                                                return <tr key={post.idtemporada}>
                                                    <th scope="row">{post.idtemporada}</th>
                                                    <td>{post.Nombre}</td>
                                                    <td>{post.fecha_inicio}</td>
                                                    <td>{post.fecha_fin}</td>
                                                    <td>{post.Estado}</td>
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
        )
    }
}

export default withRouter(Jorandas)