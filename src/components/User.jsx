import React from 'react'

const User = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/auth/fetchuser`;
    const fetchUser = async ()=>{
        const fetchTheUser = await fetch(url,{
            method :"GET",
            credentials :"include",
            headers: {"content-Type":"application/json"},
        });
        const response = await fetchTheUser.json();
        console.log(response);
    }
    fetchUser();
  return (
    <div>
    <h1>User!</h1>
        Here all user details wiil be shown.
    <hr />
    </div>
  )
}

export default User