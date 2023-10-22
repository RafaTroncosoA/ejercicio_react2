import React, { useState } from  'react';

    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        // dentro de la función createUser
        // dentro de la función createUser
        setUsername("");

    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <label>Nombre: {username}</label>
            <br></br>
            <label>Correo: {email}</label>
            <br></br>
            <label>Password: {password}</label>
            
        </div>
        </div>


    );
};

export default UserForm;
