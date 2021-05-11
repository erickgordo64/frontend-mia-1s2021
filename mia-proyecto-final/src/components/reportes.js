import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import Navigate from './navigate';



const state2 = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const data2 = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};


export default class Reportes extends Component {

   state={
       d:[]
   }

    componentDidMount() {
        this.getActividades();
    }

    getActividades = async () => {
        const res = await axios.get('http://localhost:4000/tasks');
        this.setState({
            d:res.data.map(id=>(id.ID))
        })
        console.log(res.data.map(id=>(id.ID)));
    }

    render() {

        var  state = {
            labels: ['0','3','5','10','12'],
            
            datasets: [
                {
                    label: 'Rainfall',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.state.d
                },
            
            ]
        }


        return (
            <div>
                <Navigate></Navigate>
                <div class="container">
                    <div class="row">
                        <div class="col align-self-center">
                            <Bar
                                data={state}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col align-self-center">
                            <Pie
                                data={state2}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col align-self-center">
                            <Doughnut
                                data={state2}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col align-self-center">
                            <Line
                                data={data2}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}