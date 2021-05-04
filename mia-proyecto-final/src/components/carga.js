import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import NavCliente from './navcliente';

function Carga(){
    
    const[archivos, setArchivos]=useState(null);
    
    const subirArchivos=e=> {
        setArchivos(e);
    }

    const insertarArchivos = async ()=>{
        const f = new FormData();

        for (let index=0; index< archivos.length; index++){
            f.append("archivo", archivos[index]);
        }

        await axios.post("http://localhost:4000/archivo",f)
        .then(response=>{
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
   
        return(
            <div>
                <input type="file" name="files" multiple onChange={(e)=>subirArchivos(e.target.files)}></input>
                <button className="btn btn-primary" onClick={()=>insertarArchivos()}>insertar</button>
            </div>
        )
    
}

export default Carga;