import React from 'react';

const HomePage = () => {
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