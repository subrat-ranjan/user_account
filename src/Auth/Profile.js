import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [editing, setEditing] = useState(false);
    const [loggedin, setLoggedIn] = useState(false);

    // geting the user details 
    useEffect(() => {
        const data = localStorage.getItem("userDetails");
        if (data) {
            const userDetail = JSON.parse(data);
            if (userDetail.email) {
                setLoggedIn(true);
            }
            const { email, name, phone, address } = userDetail
            setName(name)
            setEmail(email)
            setPhone(phone)
            setAddress(address)
        }
    }, []);


    //Edit functionality
    const handleEdit = () => {
        setEditing(true);
    }
    const handleCancel = () => {
        setEditing(false);
    }

    const handleSave = () => {
        //Update user details in localStorage 
        localStorage.setItem('userDetails', JSON.stringify({ name, email, phone, address }));
        setEditing(false);
        props.showAlert("Profile updated Successfully", "Success")
    }


    //Logout 

    const handleLogOut = () => {
        setLoggedIn(false)
        navigate("/")
        props.showAlert("Logged out successfully ", "Success");
    }


    return (

        <div className='  d-flex align-items-center justify-content-center ' style={{ height: "650px" }} >
            <div className='w-50'>
                <h2 align="center"> User Profile
                </h2>
                <div className="mb-3">
                    <label>User Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" disabled={editing ? false : true} />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder='Enter your E-mail:' disabled />
                </div>

                <div className="mb-3">
                    <label>Phone no. : </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder='Enter Phone no' disabled={editing ? false : true} />
                </div>
                <div className="mb-3">
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder='Enter your address' disabled={editing ? false : true} />
                </div>
                {editing ? (
                    <div className='d-flex justify-content-between'>
                        <button type="submit" className="btn btn-primary" onClick={handleSave}>Update</button>
                        <button type="submit" className="btn btn-primary" onClick={handleCancel}>Cancel</button>
                    </div>
                ) : (
                    <div className='d-flex justify-content-between'>
                        <button type="submit" className="btn btn-primary" onClick={handleEdit}>Edit</button>
                        <button type="submit" className="btn btn-primary" onClick={handleLogOut}>Logout</button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Profile
