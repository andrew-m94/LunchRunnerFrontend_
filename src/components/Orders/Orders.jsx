import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Orders.css';

const Orders = (props) => {
    const[orderList, setOrderList] = useState([]);
    const[inviteCode, setInviteCode] = useState("");
    const[isPrivate, setIsPrivate] = useState(props.lunchGroup.private);

    useEffect( () => {
        if(isPrivate === false) {
            getOrders()
        }
    }, [isPrivate])

    let getOrders = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/orders/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setOrderList(response.data);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if(inviteCode === props.lunchGroup.invite_code){setIsPrivate(false)}
        else{alert("That code is incorrect!")};
    }

    let navigate = useNavigate();

    if (isPrivate === false) {
        return (
            <div class="container-fluid orders">
                <div class="col">
                    <h1>Current Orders for this Run</h1>
                    <button type="button" class="btn btn-danger" onClick={(event) => navigate(`/create-order`)} >Add an Order!</button>
                </div>
                <div class="col">
                    <ul class="list-group">
                    {orderList.filter(orders => orders.lunchgroup === props.lunchGroup.id).map(order => (
                    <li class="list-group-item oli">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{order.order_content}</h5>
                        </div>
                        <p class="mb-1">$ {order.price}</p>
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
    else {
        return (
            <div class="container-fluid orders">
                <div class="col">
                    <img class="img lock" id="secure" src="/images/lock.png" alt="Cannot Be Displayed"/>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div class="form-group">
                            <label for="inviteCodeInput" >This group is private! Enter your invite code:</label>
                            <input type="inviteCode" class="form-control invite" id="inviteCodeInput" placeholder="Invite Code" onChange={(event) => setInviteCode(event.target.value)}/>
                        </div>
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Orders;