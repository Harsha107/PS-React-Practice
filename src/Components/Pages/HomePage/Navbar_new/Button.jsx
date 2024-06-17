import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonStyles.css'

export function Button() {
    return (
        <Link to='sign-up'>
            <button className='sign-up-btn'>Sign Up</button>
        </Link>
    );
}