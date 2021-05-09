import React, { Component } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import NavCliente from './navcliente'   
import axios from 'axios'
import 'react-big-calendar/lib/css/react-big-calendar.css'
require('moment/locale/es.js');


const localizer = momentLocalizer(moment);

const myEventsList = [{
    title: "today",
    start: new Date('2021-05-05 10:22:00'),
    end: new Date('2021-05-05 10:42:00')
},
{
    title: "string",
    start: new Date('2019-05-05 12:22:00'),
    end: new Date('2019-05-05 13:42:00')
}]

export default class EventCalendar extends Component {

    state ={
        myEventsList:[]
    }

    async componentDidMount() {
        
        this.getActividades();
    }

    getActividades = async () => {
       await axios.get('http://localhost:4000/eventos').then(response=>{
            console.log(response.data);
            this.setState({
                myEventsList: response.data
           });
        });

        
        
    }
    

    selectedEvent = (event) => {
        window.alert(event.Title);
      }                                 
    
    render() {
        return (
            <div>
                <NavCliente />
                <div className='main-container col-12'>
                    <div style={{ height: `${900}px` }} className="bigCalendar-container">
                        <Calendar
                            localizer={localizer}
                            events={this.state.myEventsList}
                            titleAccessor="Title"
                            startAccessor="Start"
                            endAccessor="End"
                            onSelecting={(event) => this.selectedEvent(event)}

                            messages={{
                                next: "sig",
                                previous: "ant",
                                today: "Hoy",
                                month: "Mes",
                                week: "Semana",
                                day: "Día"
                            }}
                        />
                    </div>
                </div>
            </div>
        );

    }

}

