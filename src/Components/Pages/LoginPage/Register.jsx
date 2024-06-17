import React, { useState } from 'react';
import './RegisterStyles.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <h2 className='reg-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              className='reg-inp1'
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              className='reg-inp2'
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              className='reg-inp3'
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className='reg-inp4'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className='reg-inp5'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='reg-btn-container'>
            <input type='submit' className='reg-btn'/>
          </div>
          <br/>
          <div className='reg-footer-container'>
            <div className='reg-footer-text'>Already have an account?</div>
            <Link className='login-redirect-btn' to='/login'>Click Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
