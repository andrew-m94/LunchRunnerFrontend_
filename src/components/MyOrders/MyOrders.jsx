import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
    const[orderList, setOrderList] = useState([]);
    const location = useLocation();

    useEffect( () => {
        getMyOrders();
        const values = location.search;
        const sp = new URLSearchParams(values);

        if (sp.has("success") === true) {
            alert('Order placed! You will recieve a confirmation email.')
        }

        if (sp.has("canceled") === true) {
            alert('Order canceled -- proceed to checkout to complete your order.')
        }
    }, [])

    let getMyOrders = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/orders/', {headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data);
        setOrderList(response.data);
    }

    return (
        <div class="container-fluid my-orders">
            <div class="col">
                <h1>My Orders</h1>
                <h3>A small fee is used to compensate your runner!</h3>
            </div>
            <div class="col">
                <ul class="list-group">
                    {orderList.map(order => (
                        <li class="list-group-item moli">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{order.order_content}</h5>
                                {order.lunchgroup.status === "Pending" &&
                                <React.Fragment>
                                <div class="badge bg-danger rounded-pill">{order.lunchgroup.status}</div>
                                </React.Fragment>
                                }
                                {order.lunchgroup.status === "Picked Up" &&
                                <React.Fragment>
                                    <div class="badge bg-warning rounded-pill">{order.lunchgroup.status}</div>
                                </React.Fragment>
                                }
                                {order.lunchgroup.status === "Delivered" &&
                                <React.Fragment>
                                    <div class="badge bg-success rounded-pill">{order.lunchgroup.status}</div>
                                </React.Fragment>
                                }
                            </div>
                            <p class="mb-1">$ {order.price}</p>
                            <div>Delivery Location: {order.lunchgroup.drop_location}</div>
                            <div>
                                {order.lunchgroup.status !== "Delivered" &&
                                <React.Fragment>
                                    <div>Estimated Arrival Time: {order.lunchgroup.drop_time}</div>
                                </React.Fragment>
                                }
                            </div>
                            <section>
                                <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                                    <input type="hidden" name="unit_amount" value={order.price * 100 + 100} />
                                    <button type="submit" class="btn btn-danger">
                                        Checkout
                                    </button>
                                </form>
                            </section>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default MyOrders;