import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Orders = (props) => {
    const[orderList, setOrderList] = useState([]);
    const[inviteCode, setInviteCode] = useState("");
    let isPrivate = props.lunchGroup.private;

    useEffect( () => {
        if(isPrivate === false) {getOrders()}
    }, [isPrivate])

    let getOrders = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/orders/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setOrderList(response.data);
    }

    let handleSubmit = () => {
        if(inviteCode === props.lunchGroup.invite_code){isPrivate = true}
        else{alert("That code is incorrect!")}
    }

    let navigate = useNavigate();

    if (isPrivate === false) {
        return (
            <div class="container-fluid">
                <h1>Orders</h1>
                <ul class="list-group">
                {orderList.filter(orders => orders.lunchgroup === props.lunchGroup.id).map(order => (
                <li class="list-group-item">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{order.order_content}</h5>
                    </div>
                    <p class="mb-1">{order.price}</p>
                </li>
                ))}
                </ul>
                <button type="button" class="btn btn-primary" onClick={(event) => navigate(`/create-order`)} >Add an Order!</button>
            </div>
        );
    }
    else {
        return (
            <div class="container-fluid">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div class="form-group">
                        <label for="inviteCodeInput" >This group is private! Enter your invite code:</label>
                        <input type="inviteCode" class="form-control" id="inviteCodeInput" placeholder="Invite Code" onChange={(event) => setInviteCode(event.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Orders;