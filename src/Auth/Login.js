import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Fetch user details from localStrorage
        const userDetails = localStorage.getItem("userDetails");
        if (userDetails) {
            const userDetail = JSON.parse(userDetails);

            if (userDetail.email === email && userDetail.password === password) {
                setLoggedIn(true);
                navigate("/profile")
                props.showAlert("Logged in successfully", "Success")
                //handling errors
            } else {
                props.showAlert("Invalid Credentials", "danger")
            }
        } else {
            props.showAlert("User not found", "danger")
        }

    };

    return (

        <div className=' d-flex align-items-center justify-content-center ' style={{ height: "650px" }}>
            <form onSubmit={handleSubmit} className='w-50'>
                <div className="form-group">
                    <h2 align="center"> Login Page
                    </h2>

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" required />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
                <p className='mt-3'> Didn't have an account <Link to="/register">  <button type="submit" className="btn btn-primary" > Register</button></Link> </p>
            </form>

        </div>

    )
}

export default Login
