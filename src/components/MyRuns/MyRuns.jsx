import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyRuns.css'

const MyRuns = () => {
    const[runList, setRunList] = useState([]);

    useEffect( () => {
        getMyLunchGroup();
    }, [])

    let getMyLunchGroup = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/lunchgroups/runner/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setRunList(response.data);
    }

    return ( 
        <div class="container-fluid my-runs">
            <div class="col">
                <h1>My Runs</h1>
            </div>
            <div class="col">
                <ul class="list-group">
                {runList.map(run => (
                    <li class="list-group-item list-group-item-action mrli">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">From: {run.pickup_from}</h5>
                        </div>
                        <p class="mb-1">Leaving at: {run.departure_time}</p>
                        {run.invite_code &&
                            <React.Fragment>
                                <small>Invite Code: {run.invite_code}</small>
                            </React.Fragment>
                        }
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}
 
export default MyRuns;