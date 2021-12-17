import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

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

    let handleClick = (event, lunchgroupId) => {
        event.preventDefault();
        props.getLunchGroup(lunchgroupId);
    }

    let navigate = useNavigate();

    return ( 
        <div class="container-fluid">
            <h1>FindRunner</h1>
            <ul class="list-group">
            {runList.map(run => (
                <button type="button" class="list-group-item list-group-item-action" onClick={(event) => {handleClick(event, run.id); navigate(`/orders`)}}>
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">From: {run.pickup_from}</h5>
                    </div>
                    <p class="mb-1">Leaving at: {run.departure_time}</p>
                </button>
            ))}
            </ul>
        </div>
    );
}
 
export default FindRunner;