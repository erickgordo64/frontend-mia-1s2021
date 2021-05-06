import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Navigate from './navigate'

const cookies = new Cookies();

export default class DashA extends Component{

    async componentDidMount() {
        
        if(!cookies.get('id')){
            window.location.href="./";
        }     
    }

    render(){
        return(
            <Navigate/>
        )
    }
}