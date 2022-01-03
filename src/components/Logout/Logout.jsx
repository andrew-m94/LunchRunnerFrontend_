import React from 'react';
import './Logout.css';

const Logout = () => {

    const deleteToken = () => {
        localStorage.clear();
        window.location = '/';
    }

    return(
        <div class="container-fluid logout">
            <div>
                <h1>Are you sure you want to logout?</h1>
                <button type="submit" class="btn btn-danger" onClick={() => deleteToken()}>Logout</button>
                <button type="submit" class="btn btn-danger" onClick={() => window.location = '/'}>Return Home</button>
            </div>
        </div>
    )
};

export default Logout