import React, { useState } from 'react';
import axios from 'axios';
import './CreateOrder.css';

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
        <div class="container-fluid create-order">
            <div class="col">
            <img class="img bag" id="shopping-art" src="/images/bag.png" alt="Cannot Be Displayed"/>
            </div>
            <div class="col">
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Create Your Order!</h1>
                <div class="form-group">
                    <label for="orderContentInput" >Order Details</label>
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
            <div class="col"></div>
        </div>
    );
}
 
export default CreateOrder;