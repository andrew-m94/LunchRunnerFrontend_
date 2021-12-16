import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import RegisterUser from './RegisterUser/RegisterUser';
import Login from './Login/Login';
import jwtDecode from 'jwt-decode';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user})
            
        } catch {}
    }

    render() { 
        return ( 
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        );
    }
}
 
export default App;
