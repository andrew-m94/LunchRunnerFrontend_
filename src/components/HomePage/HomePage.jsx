import React from 'react';
import './HomePage.css';

const HomePage = () => {

    return ( 
        <div class="container-fluid home-page">
            <div class="col hlc">
                <img class="img bag" id="shopping-art" src="/images/bag.png" alt="Cannot Be Displayed"/>
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