import axios from 'axios';
import React, {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    let handleSubmit = async (event) => {
        event.preventDefault();
        let loginInfo = {username: username, password: password};
        let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", loginInfo);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        window.location = "/";
    }

    return ( 
        <div class="container-fluid" onSubmit={(event) => handleSubmit(event)}>
            <form>
                <div class="form-group">
                    <label for="usernameInput" >Username </label>
                    <input type="username" class="form-control" id="usernameInput" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                <div class="form-group">
                    <label for="passwordInput" >Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>
            </form>
        </div>
    );      
}
 
export default Login;