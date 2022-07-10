import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 

import "./style/style.css";

function Register() { 
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

//    useEffect(()=>{
//     fetchProducts() 
// })

async function signUp() {
    let item={name, password, email};
    let result = await fetch("https://blooming-spire-26791.herokuapp.com/api/register", {
     method: 'POST',
     body: JSON.stringify(item),
     headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
     }
  });
   result = await result.json();
   localStorage.setItem('user-info', JSON.stringify(result))
   history.push('/adminhome')
}

  return (
   <React.Fragment>
         <div className="app">
            <div className="login-form">
              <div className="title title_dark">Sign Up</div>
               <div className="form">
                  <div className="input-container">
                    <label>Username </label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name" required />
                    {/* {renderErrorMessage("uname")} */}
                  </div>
                  <div className="input-container">
                    <label>Password </label>
                    <input  onChange={(e)=>setPassword(e.target.value)} type="password" value={password} name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
                  </div>

                  <div className="input-container">
                    <label>Email </label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
                  </div>
                  <div className="button-container">
                    <input onClick={signUp} type="submit" />
                  </div>
              </div>
            </div>
        </div>

        <div>
        </div>
   </React.Fragment>
  );
}

export default Register;