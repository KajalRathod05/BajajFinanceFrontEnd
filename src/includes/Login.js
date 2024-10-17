import { useForm } from 'react-hook-form';
import { useState } from 'react';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // 

         const onLogin=(auth)=>
         {
             axios.get(`http://localhost:8090/getUser/${auth.username}/${auth.password}`).
             then(res=>
             {
              if(res.status===200)
              {
               
                let userJson=JSON.stringify(res.data);

                localStorage.setItem('User',userJson);
                navigate('/Bajaj-Finance')
              }
               
             }
             ).catch(()=>alert('something wents wrong...'))
         }

  // const getFormData = (data) => {
  //   if (data.username === 'oe' && data.password === 'oe') {
  //     // Handle successful login here (e.g., redirect, set user state)
  //     console.log('Login successful');
  //     setLoginError('');
  //     navigate('/dashboard/oe')
  //   } else {
  //     setLoginError('Invalid username or password');
  //   }
  // };

  return (
    <div className="App">
      <h1>Sign-In Here</h1>
      <form className="form__container" onSubmit={handleSubmit(onLogin)}>
        <div className="form__controls">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register('username', { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div className="form__controls">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        
        {loginError && <p className="error">{loginError}</p>}

        <div className="form__controls">
          <button type="submit" className="button">Login</button>
        </div>
      </form>
    </div>
  );
}
