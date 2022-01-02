import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
        <div class="container-fluid">
            <span>
                <a class="btn btn-primary" href="/find-runner" role="button">Get Lunch</a>
                <a class="btn btn-primary" href="/create-run" role="button">Start a Run</a>
            </span>
        </div>
    );
}
 
export default HomePage;