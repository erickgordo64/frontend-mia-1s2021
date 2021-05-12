import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import NavCliente from './navcliente'

const cookies = new Cookies();

export default class DashC extends Component{

    async componentDidMount() {
        
       if(!cookies.get('id')){
            window.location.href="./loginA";
        }   
    }

    render(){
        return(
            <NavCliente/>
        )
    }
}