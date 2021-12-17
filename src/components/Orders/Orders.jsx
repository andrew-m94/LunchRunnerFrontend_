import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Orders = (props) => {
    const[orderList, setOrderList] = useState([]);

    useEffect( () => {
        getOrders();
    }, [])

    let getOrders = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/orders/all/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setOrderList(response.data);
    }

    return (
        <div class="container-fluid">
            <h1>Orders</h1>
            <ul class="list-group">
            {orderList.filter(orders => orders.lunchgroup === props.lunchGroupId).map(order => (
            <li class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{order.order_content}</h5>
                </div>
                <p class="mb-1">{order.price}</p>
            </li>
            ))}
            </ul>
        </div>
    );
}
 
export default Orders;