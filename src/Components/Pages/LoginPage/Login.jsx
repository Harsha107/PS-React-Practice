import React, { useState } from 'react'
import './LoginStyles.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const dbs = [
        {
            username: 'user1',
            password: 'pass1'
        },
        {
            username: 'user2',
            password: 'pass2'
        },
    ];

    const errors = {
        username_err: 'Invalid Username',
        password_err: 'Invalid Password'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var { username_err, password_err } = document.forms[0];
        const userData = dbs.find((user) => user.username === username_err.value);
        (userData) ? ((userData.password !== password_err.value) ? setErrorMessages({name: 'password-error', message: errors.password_err}) : setIsSubmitted(true)) : setErrorMessages({name: 'username-error', message: errors.username_err})
    }

    const renderErrorMessage = (name) => 
        name === errorMessages.name && (
            <div className='some-error'>{errorMessages.message}</div>
        )

    const renderForm = (
        <div className='lgn-form'>
            <form onSubmit={handleSubmit}>
                <div className='inp-container'>
                    <label>Username</label>
                    <input className='lgn-inp1' type='text' placeholder='victor' name='username_err' required/>
                    {renderErrorMessage('username_err')}
                </div>
                <div className='inp-container'>
                    <label>Password</label>
                    <input className='lgn-inp2' type='password' placeholder='****' name='password_err' required/>
                    {renderErrorMessage('password_err')}
                </div>
                <div className='login-btn-container'>
                    <input className='lgn-inp3' type='submit'/>
                </div>
            </form>
        </div>
    );

  return (
    <div className='login-form-container'>
        <div className='login-form'>
            <div className='login-title'>Sign In</div>
            {isSubmitted ? <div>Login Successful</div> : renderForm}
            <br/>
            <div className='login-footer'>
                <div className='login-footer-text'>Don't have an account?</div>
                <Link className='register-redirect-btn' to='/register'>Click here</Link>
            </div>
        </div>
    </div>
  )
}

export default Login