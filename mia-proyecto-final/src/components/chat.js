import React, { Component, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import NavCliente from './navcliente'

const socket = new WebSocket("ws://localhost:4000/ws")
const cookies = new Cookies();

function Chat() {
  const [message, setMessage] = useState('')
  const [inputValue, setInputValue] = useState('')

  const [prueba, setPrueba] = useState([])
    
    const fetchMyAPI = useCallback(async () => {
      const id = cookies.get('id');
      console.log(id);
      let response = await fetch(`http://localhost:4000/MostrarMensajesChat/${id}`)
      response = await response.json()
      setPrueba(response)
      console.log(prueba)
    }, [prueba])

  useEffect(() => {
    socket.onopen = () => {
      setMessage('Connected')
    };

    socket.onmessage = (e) => {
      console.log('e: ', e)
      setMessage("Get message from server: " + e.data)
    };

    return () => {
      socket.close()
    }


  }, [])

  const handleClick = useCallback((e) => {
    e.preventDefault()

    socket.send(JSON.stringify({
      message: inputValue
    }))

    fetchMyAPI();
  }, [inputValue, fetchMyAPI])

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value)
  }, [])
  
  return (
    <div>
      <NavCliente />
      <input id="input" type="text" value={inputValue} onChange={handleChange} />
      <ul className="list-group">
      
      </ul>
      <button onClick={handleClick}>Send</button>
      <pre>{message}</pre>
    </div>
  )
}

export default Chat