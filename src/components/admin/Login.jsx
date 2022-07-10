import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import "./style/style.css";

function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
        history.push("/login");
    }
  }, [])

  
    const login = async () => {
      let item = {email, password};

     let result = await axios.post(`https://blooming-spire-26791.herokuapp.com/api/login`, item)

      result = result.data;
      localStorage.setItem("user-info", JSON.stringify(result))
      if (result.email == 'hello@cryptomrsami') {
        history.push('/layout')
      }else {
        Swal.fire({
          text:"Email or password is incorrect",
          icon:"error"
        })
      }
      // history.push('/layout')

    //   let item={password, email};
    //   let result = await fetch("https://blooming-spire-26791.herokuapp.com/api/register", {
    //    method: 'POST',
    //    body: JSON.stringify(item),
    //    headers: {
    //       "Content-Type": 'application/json',
    //       "Accept": 'application/json'
    //    }
    // });
    //  result = await result.json();
    //  localStorage.setItem('user-info', JSON.stringify(result))
    //  history.push('/layout')
  }

  return (
   <React.Fragment>
         <div className="app">
            <div className="login-form">
              <div className="title title_dark">Sign In</div>
               <div className="form">
                  <div className="input-container">
                    <label>Email </label>
                    <input type="email" className="text-dark" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" required />
                  </div>

                  <div className="input-container">
                    <label>Password </label>
                    <input type="password" className="text-dark" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} name="pass" required />
                  </div>

                  <div className="button-container">
                    <input onClick={login} type="submit" />
                  </div>
              </div>
            </div>
        </div>

        <div>
        </div>
   </React.Fragment>
  );
}

export default Login;