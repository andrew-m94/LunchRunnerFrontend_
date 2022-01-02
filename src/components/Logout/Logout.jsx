import React from 'react';

const Logout = () => {

    const deleteToken = () => {
        localStorage.clear();
        window.location = '/';
    }

    return(
        <div align="center">
            <h2>Are you sure you want to logout?</h2>
            <br/>
            <button type="submit" onClick={() => deleteToken()}>Logout</button>
            <button type="submit" onClick={() => window.location = '/'}>Return Home</button>
        </div>
    )
};

export default Logout