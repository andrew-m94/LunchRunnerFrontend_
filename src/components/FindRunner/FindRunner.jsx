import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './FindRunner.css';

const FindRunner = (props) => {
    const[runList, setRunList] = useState([]);

    useEffect( () => {
        getLunchGroups();
    }, [])

    let getLunchGroups = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/lunchgroups/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setRunList(response.data);
    }

    let handleClick = (event, lunchgroup) => {
        event.preventDefault();
        props.getLunchGroup(lunchgroup);
    }

    let navigate = useNavigate();

    return ( 
        <div class="container-fluid find-runner">
            <div class="col">
                <h1 class="find">Find a Runner</h1>
                <h3 class="available">Available Runs</h3>
            </div>
            <div class="col rcfr">
                <ul class="list-group ulfr">
                {runList.map(run => (
                    <button type="button" class="list-group-item list-group-item-action list-item" onClick={(event) => {handleClick(event, run); navigate(`/orders`)}}>
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">From: {run.pickup_from}</h5>
                        </div>
                        <p class="mb-1">Leaving at: {run.departure_time}</p>
                    </button>
                ))}
                </ul>
            </div>
        </div>
    );
}
 
export default FindRunner;