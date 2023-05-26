import React, { useState } from 'react'

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        email : "",
        name: "",
        password: ""
    });
    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
       const url = `${process.env.REACT_APP_SERVER_URL}/api/auth/createuser`;
       const sendData = await fetch(url,{
            method:"POST",
            credentials :"include",// not required but will require when sending cookies or jwt token
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
       });
       const response = await sendData.json();
       console.log(response);
    }
    return (
        <div>
            <h2>Register Page</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input name='email' onChange={handleChange} autoComplete='of' value={userDetails.email} type="email" /> <br /> <br />
                <label htmlFor="fname">Name</label>
                <input name='name' onChange={handleChange} value={userDetails.name} type="text" /> <br /> <br />
                <label htmlFor="lname">Passowrd</label>
                <input name='password' onChange={handleChange} value={userDetails.password} type="password" /> <br /> <br />
                <button onClick={handleSubmit} >Submit</button>
            </form>
            <hr />
            {/* end of components */}
        </div>
    )
}

export default Register