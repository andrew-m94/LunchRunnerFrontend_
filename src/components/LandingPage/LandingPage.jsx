import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div class="container-fluid landing-page">
            <div class="col info">
                Sending an employee to pick up lunch? Make it easy!
            </div>
            <div class="col">
                <div class="title fw-bold">
                    LunchRunner
                </div>
                <div>
                    <a class="btn btn-danger" href="/register" role="button">Sign up!</a>
                    <a class="btn btn-danger" href="/login" role="button">Sign In!</a>
                </div>
            </div>
            <div class="col">
                <img class="img-fluid" id = "page-art" src="/images/running.png" alt="Cannot Be Displayed"/>
            </div>
        </div>
    );
}
 
export default LandingPage;