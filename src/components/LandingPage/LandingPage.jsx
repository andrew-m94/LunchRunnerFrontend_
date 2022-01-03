import React from 'react';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div class="container-fluid landing-page">
            <span>
                <a class="btn btn-primary" href="/register" role="button">Sign up!</a>
                <a class="btn btn-primary" href="/login" role="button">Sign In!</a>
            </span>
        </div>
    );
}
 
export default LandingPage;