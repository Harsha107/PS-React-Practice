import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './NewNavbarStyles.css'
import Dropdown from './Dropdown'


const NewNavbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }

  return (
    <>
        <nav className='new-navbar'>
            <Link to='/' className='nn-logo'>
                EPIC
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='newnav-item'>
                    <Link to='/' className='newnav-links' onClick={closedMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='newnav-item'
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                >
                    <Link to='/collections/all' className='newnav-links' onClick={closedMobileMenu}>
                        Collections <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='newnav-item'>
                    <Link to='/' className='newnav-links' onClick={closedMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='newnav-item'>
                    <Link to='/' className='newnav-links-mobile' onClick={closedMobileMenu}>
                        Signup
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    </>
  )
}

export default NewNavbar