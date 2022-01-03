import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const values = location.search;
        const sp = new URLSearchParams(values);

        if (sp.has("success") === true) {
            alert('Order placed! You will recieve a confirmation email.')
        }

        if (sp.has("canceled") === true) {
            alert('Order canceled -- proceed to checkout to complete your order.')
        }
    }, []);

    return ( 
        <div class="container-fluid home-page">
            <div class="col row hlc">
            <img class="img-fluid bag" id="shopping-art" src="/images/bag.png" alt="Cannot Be Displayed"/>
            <div>
                <a class="btn btn-danger" href="/find-runner" role="button">Get Lunch</a>
            </div>
            </div>
            <div class="col">
                <div>
                <h1>Hungry? | Pick-up</h1>
                <img class="img-fluid" id="arrows" src="/images/arrows.png" alt="Cannot Be Displayed"/>
                </div>
            </div>
            <div class="col">
            <img class="img-fluid runner" id = "page-art" src="/images/running.png" alt="Cannot Be Displayed"/>
            <div>
                <a class="btn btn-danger" href="/create-run" role="button">Start a Run</a>
            </div>
            </div>
        </div>
    );
}
 
export default HomePage;