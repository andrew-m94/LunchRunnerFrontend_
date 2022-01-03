import React from 'react';

const NavBar = ({user}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">
                    Lunch<span class="nav-runner">Runner</span>
                <img src="/images/running-white.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                </a>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/my-orders">My Orders</a></li>
                            <li><a class="dropdown-item" href="/my-runs">My Runs</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="/logout">Logout</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;