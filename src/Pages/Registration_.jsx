import LayOut from "../components/Product/LayOut";
import "./registr.css";
import { useState, } from "react";

function RegistrPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    localStorage.setItem("username", mail);
    localStorage.setItem("password", password);
  };

  const mailChange = (evt)=>{
    setMail(evt.target.value)
  }
  const passwordChange = (evt)=>{
    setPassword(evt.target.value)
  } 

  return (
    <>
      <LayOut hideFilter>
        <h3 className="h3_sign"> Sign In</h3>
        <div className="Reg_page">
          <button className="icon_button"></button>
          <form autoComplete="off" onSubmit={(evt) => evt.preventDefault}>
            <input className="Email_"
             placeholder=" Email"
             type="email" 
             value={mail} 
             onChange={mailChange}
             ></input>
            <input
              className="Password"
              placeholder=" Password"
              type="password"
              value={password}
              onChange={passwordChange}
            ></input>
            <button className="sign_In"
             onClick={login} >
              Sign In</button>
          </form>
        </div>
      </LayOut>
    </>
  );
}
export default RegistrPage;
