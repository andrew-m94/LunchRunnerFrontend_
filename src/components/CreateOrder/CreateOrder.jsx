import React, { useState } from 'react';
import axios from 'axios';

const CreateOrder = (props) => {
    const[orderContent, setOrderContent] = useState("");
    const[price, setPrice] = useState(0.00);
    const[notes, setNotes] = useState("");
    console.log(props.lunchGroupId)
    let newOrder = {};
    if (notes === ""){
        newOrder = {
            lunchgroup: props.lunchGroupId,
            order_content: orderContent,
            price: price
        }
    } else {
        newOrder = {
            lunchgroup: props.lunchGroupId,
            order_content: orderContent,
            price: price,
            notes: notes
        }
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        const jwt = localStorage.getItem('token');
        let response = await axios.post("http://127.0.0.1:8000/api/orders/", newOrder, {headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data);
        if (response.request.status === 201) {
          alert("Order Added");
        }
    };

    return (
        <div class="container-fluid">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div class="form-group">
                    <label for="orderContentInput" >Pickup Location</label>
                    <input type="orderContent" class="form-control" id="orderContentInput" placeholder="Enter Order Here" onChange={(event) => setOrderContent(event.target.value)}/>
                    </div>
                <div class="form-group">
                    <label for="priceInput" >Price</label>
                    <input type="price" class="form-control" id="priceInput" placeholder="0.00" onChange={(event) => setPrice(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="notesInput" >Notes(Optional)</label>
                    <input type="notes" class="form-control" id="notesInput" placeholder="Additional Info" onChange={(event) => setNotes(event.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
 
export default CreateOrder;