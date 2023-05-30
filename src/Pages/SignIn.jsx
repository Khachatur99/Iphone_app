import React, { useState } from 'react';
import LayOut from '../components/Product/LayOut';
import "./registr.css";
import { Link } from 'react-router-dom';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Успешный вход!');
      // Действия после успешного входа
    } else {
      alert('Неверный email или пароль. Пожалуйста, зарегистрируйтесь.');
      // Действия, если вход не удался
    }
  };

  return (
      
    <LayOut hideFilter>
    <h3 className="h3_sign_in"> Sign In</h3>
    <div className="Reg_page">
      <button className="icon_button"></button>
      <form autoComplete="on" onSubmit={(evt) => evt.preventDefault}>
        <input className="Email_"
         placeholder=" Email"
         type="email" 
         value={email} 
         onChange={e => setEmail(e.target.value)}
         ></input>
        <input
          className="Password"
          placeholder=" Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <button className="sign_In"
         onClick={handleSignIn} >
          Sign In</button>
      </form>
      <div className='newAccount_'> Don't have an account? <Link to="/SignUpPage">SignUp</Link>  </div>
    </div>
  </LayOut>
  );
}



export default SignIn;


