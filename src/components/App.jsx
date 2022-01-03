import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import RegisterUser from './RegisterUser/RegisterUser';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import jwtDecode from 'jwt-decode';
import FindRunner from './FindRunner/FindRunner';
import CreateRun from './CreateRun/CreateRun';
import Orders from './Orders/Orders';
import CreateOrder from './CreateOrder/CreateOrder';
import MyRuns from './MyRuns/MyRuns';
import NavBar from './NavBar/NavBar';
import Logout from './Logout/Logout';
import MyOrders from './MyOrders/MyOrders';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
        this.lunchGroup = [];
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});

        } catch {}
    }

    getLunchGroup = (lunchGroup) => {
        this.lunchGroup = lunchGroup
        this.setState({});
    }

    render() { 
        const user = this.state.user;
        return ( 
            <Router>
                {user && (
                    <NavBar user={user}/>
                )}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/find-runner" element={<FindRunner getLunchGroup={this.getLunchGroup} />} />
                    <Route path="/my-runs" element = {<MyRuns />} />
                    <Route path="/create-run" element={<CreateRun />} />
                    <Route path="/orders" element={<Orders lunchGroup={this.lunchGroup}/>} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/create-order" element={<CreateOrder lunchGroupId={this.lunchGroup.id}/>} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
                <Footer />
            </Router>
        );
    }
}
 
export default App;
