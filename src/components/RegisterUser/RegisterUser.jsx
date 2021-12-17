import React, {useState} from 'react';
import axios from 'axios';

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
        <div class="container-fluid">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div class="form-group">
                    <label for="usernameInput" >Username </label>
                    <input type="username" class="form-control" id="usernameInput" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                <div class="form-group">
                    <label for="passwordInput" >Password</label>
                    <input type="password" class="form-control" id="passwordInput" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="emailInput" >Email </label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="firstNameInput" >First Name </label>
                    <input type="firstName" class="form-control" id="firstNameInput" placeholder="First Name" onChange={(event) => setFirstName(event.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="lastNameInput" >Last Name </label>
                    <input type="lastName" class="form-control" id="lastNameInput" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
 
export default RegisterUser;