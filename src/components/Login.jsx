import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState({
        fName: "",
        lName: ""
    });
    const handleChange = (e) => {
        setUserName({ ...userName, [e.target.name]: e.target.value })
    }
    const handleSubmit = async(e)=>{
       e.preventDefault();
       const url = "http://localhost:5000";
    //    const data = 
       const sendData = await fetch(url,{
            method:"POST",
            // credentials :"include",// not required but will require when sending cookies or jwt token
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(userName)
       });
       const response = sendData;
       console.log(response);
    }
    return (
        <div>
            <form>
                <label htmlFor="fname">First Name</label>
                <input name='fName' onChange={handleChange} value={userName.fName} type="text" /> <br /> <br />
                <label htmlFor="lname">Last Name</label>
                <input name='lName' onChange={handleChange} value={userName.lName} type="text" /> <br /> <br />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default Login