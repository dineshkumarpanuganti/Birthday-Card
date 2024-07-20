import { useEffect, useState } from "react";
import Home from "./Home";
const Effects = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [route, setRoute] = useState(false);
useEffect(()=>{
    if(localStorage.getItem('KeytoLogin') === '1')
    {
        setRoute(true);
    }
})
useEffect(()=>{
    if(localStorage.getItem('KeytoLogin') === '0'){
        setRoute(false);
        console.log("loggedoff")
    }
})


  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    localStorage.setItem('KeytoLogin','1')
    setRoute(true);
  };
  const logoffHandler = (e) => {
    localStorage.setItem('KeytoLogin','0')
    console.log("loggedoff")
    setRoute(true);
  };
  return (
    <div>
      {route ? (
        <Home
            logoffHandler = {logoffHandler}
        />
      ) : (
        <div>
          <header>
            <h1>Welcome to Login</h1>
          </header>
          <div>
            <label>Email</label>
            <input type="email" onChange={emailHandler} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" min="6" onChange={passwordHandler} />
          </div>
          <div>
            <button onClick={submitHandler}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Effects;
