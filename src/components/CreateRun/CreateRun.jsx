import React, {useState} from 'react';
import axios from 'axios';

const CreateRun = () => {
    const[pickupFrom, setPickupFrom] = useState("");
    const[departureTime, setDepartureTime] = useState("");
    const[dropLocation, setDropLocation] = useState("");
    const[dropTime, setDropTime] = useState("");

    const newRun = {
        pickup_from: pickupFrom,
        departure_time:departureTime,
        drop_location: dropLocation,
        drop_time: dropTime
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.post("http://127.0.0.1:8000/api/lunchgroups/runner/", newRun);
        console.log(response.data);
        if (response.request.status === 201) {
          alert("Run Scheduled");
          window.location = "/find-run";
        }
    };

    return ( 

        <div class="container-fluid">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div class="form-group">
                    <label for="pickupFromInput" >Pickup Location</label>
                    <input type="pickupFrom" class="form-control" id="pickupFromInput" placeholder="Pickup Location" onChange={(event) => setPickupFrom(event.target.value)}/>
                    </div>
                <div class="form-group">
                    <label for="departureTimeInput" >Departure Time</label>
                    <input type="departureTime" class="form-control" id="departureTimeInput" placeholder="HH:MM" onChange={(event) => setDepartureTime(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="dropLocationInput" >Drop Location</label>
                    <input type="dropLocation" class="form-control" id="dropLocationInput" placeholder="Drop Location" onChange={(event) => setDropLocation(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="dropTimeInput" >Estimated Return Time</label>
                    <input type="dropTime" class="form-control" id="dropTimeInput" placeholder="HH:MM" onChange={(event) => setDropTime(event.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
 
export default CreateRun;