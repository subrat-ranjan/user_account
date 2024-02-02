import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Register = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userDetails", JSON.stringify({ name, email, password, phone, address }));
        navigate("/")
        props.showAlert("Account created Successfully", "success")

    }
    return (
        <div>
            <div className=' d-flex align-items-center justify-content-center ' style={{ height: "650px" }}>
                <form onSubmit={handleSubmit} className='w-50'>
                    <div className="mb-3">
                        <h2 align="center"> Create Account
                        </h2>

                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder='Enter your name:' required />
                    </div>
                    <div className="mb-3">

                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder='Enter your E-mail:' required />
                    </div>

                    <div className="mb-3">

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder='Enter password' required />
                    </div>
                    <div className="mb-3">

                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder='Enter Phone no' required />
                    </div>
                    <div className="mb-3">

                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder='Enter your address' required />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>

        </div>
    )
}

export default Register
