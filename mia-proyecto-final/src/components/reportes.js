import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import Navigate from './navigate';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

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

export default class Reportes extends Component {
    render() {
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
            </div>
        )
    }
}