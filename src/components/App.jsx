import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import RegisterUser from './RegisterUser/RegisterUser';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import jwtDecode from 'jwt-decode';
import FindRunner from './FindRunner/FindRunner';
import CreateRun from './CreateRun/CreateRun';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
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
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/find-runner" element={<FindRunner />} />
                    <Route path="/create-run" element={<CreateRun />} />
                </Routes>
            </Router>
        );
    }
}
 
export default App;
