import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyRuns.css'

const MyRuns = () => {
    const[runList, setRunList] = useState([]);
    const[status, setStatus] = useState([]);

    useEffect( () => {
        getMyLunchGroup();
    }, [status])

    let getMyLunchGroup = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/lunchgroups/runner/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setRunList(response.data);
    }

    let statusPickedUp = async (pk) => {
        const jwt = localStorage.getItem('token');
        let status = {status: "Picked Up"};
        let response = await axios.patch('http://127.0.0.1:8000/api/lunchgroups/runner/'+ pk + '/', status, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setStatus(status);
    }

    let statusDelivered = async (pk) => {
        const jwt = localStorage.getItem('token');
        let status = {status: "Delivered"}
        let response = await axios.patch('http://127.0.0.1:8000/api/lunchgroups/runner/'+ pk + '/', status, {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setStatus(status);
    }

    return ( 
        <div class="container-fluid my-runs">
            <div class="col">
                <h1>My Runs</h1>
            </div>
            <div class="col">
                <ul class="list-group mrul">
                {runList.map(run => (
                    <li class="list-group-item list-group-item-action mrli">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">From: {run.pickup_from}</h5>
                            <div class="badge bg-danger rounded-pill">{run.status}</div>
                        </div>
                        <p class="mb-1">Leaving at: {run.departure_time}</p>
                        {run.invite_code &&
                            <React.Fragment>
                                <small>Invite Code: {run.invite_code}</small>
                            </React.Fragment>
                        }
                        {run.status === "Pending" &&
                            <React.Fragment>
                                <div>
                                    Update Status:
                                    <button class="btn btn-danger" onClick={() => statusPickedUp(run.id)} >Picked Up</button>
                                </div>
                            </React.Fragment>
                        }
                        {run.status === "Picked Up" &&
                            <React.Fragment>
                                <div>
                                    Update Status:
                                    <button class="btn btn-danger" onClick={() => statusDelivered(run.id)} >Delivered</button>
                                </div>
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