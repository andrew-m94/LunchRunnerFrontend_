import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    let handleSubmit = async (event) => {
        event.preventDefault();
        let loginInfo = {username: username, password: password};
        let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", loginInfo);
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        window.location = "/home";
    }

    return ( 
        <div class="container-fluid login">
            <div class="col" ></div>
            <div class="col lcc" >
                <h1>Sign in!</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div class="form-group lfg">
                        <label for="usernameInput" >Username </label>
                        <input type="username" class="form-control" id="usernameInput" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                    <div class="form-group lfg">
                        <label for="passwordInput" >Password</label>
                        <input type="password" class="form-control" id="passwordInput" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-danger">Submit</button>
                </form>
            </div>
            <div class="col" >
            <img class="img-fluid" id = "page-art" src="/images/running.png" alt="Cannot Be Displayed"/>
            </div>
        </div>
    );      
}
 
export default Login;