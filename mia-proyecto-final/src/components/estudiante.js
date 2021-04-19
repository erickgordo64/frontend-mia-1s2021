import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Estudiante extends Component{
    
    state ={
        alumnos:[]
    }

    async componentDidMount() {
        this.getActividades();
    }

    getActividades = async () => {
        const res = await axios.get('http://localhost:4000/data');
        this.setState({
            alumnos: res.data
        });
        console.log(res.data);
    }
    

    render(){
        return(

        <div>
            <h1>lista de alumnos</h1>
            <ul className="list-group">
                {
                    this.state.alumnos.map(alumno=>(
                        <li className="list-group-item" key={alumno.Nombre}>{alumno.Nombre+" "+alumno.Apellido}</li>
                    ))
                }
            </ul>
        </div>
        )
    }
}