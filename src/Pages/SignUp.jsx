import React, { useState } from 'react';
import LayOut from '../components/Product/LayOut';
import "./registr.css";
import { Link } from 'react-router-dom';



function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert('Пользователь с таким email уже существует.');
      // Действия, если пользователь уже зарегистрирован
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Успешная регистрация!');
      // Действия после успешной регистрации
    }
  };

  return (
    <LayOut hideFilter>
    <h3 className="h3_sign_up"> Sign Up</h3>
    <div className="Reg_page">
      <button className="icon_button"></button>
      <form autoComplete="on" onSubmit={(evt) => evt.preventDefault}>
        <input className='Name_' 
        placeholder='Name'
        />
        <input className="Email_"
         placeholder=" Email"
         type="email" 
         value={email} 
         onChange={e => setEmail(e.target.value)}
         />
        <input
          className="Password"
          placeholder=" Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
         />
     
        <button className="sign_Up"
         onClick={handleSignUp} >
          Sign Up</button>
      </form>
      <div className='newAccount_'> Do you already have an account? <Link to="/SignInPage">Sign In</Link>  </div>
    </div>
  </LayOut>


    // <div>
    //   <h2>Регистрация</h2>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={e => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Пароль"
    //     value={password}
    //     onChange={e => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleSignUp}>Зарегистрироваться</button>
    // </div>
  );
}
export default SignUp