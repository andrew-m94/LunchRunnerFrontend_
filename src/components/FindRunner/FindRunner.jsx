import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindRunner = () => {
    const[runList, setRunList] = useState([]);

    useEffect( () => {
        getLunchGroups();
    }, [])

    let getLunchGroups = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/lunchgroups/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setRunList(response.data);
        console.log(runList);
    }

    return ( 
        <div class="container-fluid">
            <h1>FindRunner</h1>
            <ul class="list-group">
            {runList.map(run => (
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">From: {run.pickup_from}</h5>
                    </div>
                    <p class="mb-1">Leaving at: {run.departure_time}</p>
                </a>
            ))}
            </ul>
        </div>
    );
}
 
export default FindRunner;