import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import NavCliente from './navcliente'

const cookies = new Cookies();

export default class Estudiante extends Component{
    
    state ={
        alumnos:[]
    }

    async componentDidMount() {
        
        if(!cookies.get('id')){
            window.location.href="./";
        }     
        
        this.getActividades();
    }

    getActividades = async () => {
        const res = await axios.get('http://localhost:4000/tasks');
        this.setState({
            alumnos: res.data
        });
        console.log(res.data);
    }
    

    render(){

        console.log('id: '+cookies.get('id'));
        console.log('username: '+cookies.get('username'));

        return(

        <div>
            <NavCliente/>
            <h1>lista de alumnos</h1>
            <ul className="list-group">
                {
                    this.state.alumnos.map(alumno=>(
                        <li className="list-group-item" key={alumno.ID}>{alumno.ID+" - "+alumno.Name+" - "+alumno.Content}</li>
                    ))
                }
            </ul>
        </div>
        )
    }
}