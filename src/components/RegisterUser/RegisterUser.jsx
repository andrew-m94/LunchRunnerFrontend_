import React, {useState} from 'react';
import axios from 'axios';
import './RegisterUser.css';

const RegisterUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const newUser = {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.post("http://127.0.0.1:8000/api/auth/register/", newUser);
        console.log(response.data);
        if (response.request.status === 201) {
          alert("Registration Complete, Please sign in.");
          window.location = "/login";
        }
    };

    return ( 
        <div class="container-fluid register-user">
            <div class="col "></div>
            <div class="col ">
                <form onSubmit={(event) => handleSubmit(event)}>
                        <h1>Create Account</h1>
                    <div class="form-group rfg">
                        <label for="usernameInput" >Username </label>
                        <input type="username" class="form-control" id="usernameInput" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                    <div class="form-group rfg">
                        <label for="passwordInput" >Password</label>
                        <input type="password" class="form-control" id="passwordInput" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div class="form-group rfg">
                        <label for="emailInput" >Email </label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div class="form-group rfg">
                        <label for="firstNameInput" >First Name </label>
                        <input type="firstName" class="form-control" id="firstNameInput" placeholder="First Name" onChange={(event) => setFirstName(event.target.value)}/>
                    </div>
                    <div class="form-group rfg">
                        <label for="lastNameInput" >Last Name </label>
                        <input type="lastName" class="form-control" id="lastNameInput" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-danger">Submit</button>
                </form>
            </div>
            <div class="col ">
            <img class="img-fluid" id = "page-art" src="/images/running.png" alt="Cannot Be Displayed"/>
            </div>
        </div>
    );
}
 
export default RegisterUser;