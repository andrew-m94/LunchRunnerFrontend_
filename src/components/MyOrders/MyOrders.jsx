import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MyOrders = () => {
    const[orderList, setOrderList] = useState([]);

    useEffect( () => {
        getMyOrders()
    }, [])

    let getMyOrders = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/orders/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setOrderList(response.data);
    }

    return (
        <div class="container-fluid">
            <h1>My Orders</h1>
            <ul class="list-group">
                {orderList.map(order => (
                    <li class="list-group-item">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{order.order_content}</h5>
                        </div>
                        <p class="mb-1">{order.price}</p>
                        <section>
                            <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                                <input type="hidden" name="unit_amount" value={order.price * 100} />
                                <button type="submit">
                                    Checkout
                                </button>
                            </form>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default MyOrders;