import React from 'react';

const HomePage = () => {
    return (
        <div class="container-fluid">
            <span>
                <a class="btn btn-primary" href="/register" role="button">Sign up!</a>
                <a class="btn btn-primary" href="/login" role="button">Sign In!</a>
            </span>
        </div>
    );
}
 
export default HomePage;