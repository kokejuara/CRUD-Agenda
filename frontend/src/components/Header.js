import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    
        const [visited, setVisited] = useState('Home');

        return(
            <>
            <div className='header'>
                <h1>Simple CRUD Agenda</h1>
                <div className='header-right'>
                    <Link to='/'>
                        <p className={visited === 'Home' ? "active" : "" } onClick={() => {setVisited('Home')} }>Home</p>
                    </Link>
                    <Link to='/add'>
                        <p  className={visited === 'Add' ? "active" : "" } onClick={() => {setVisited('Add')} }>Add Contact</p>
                    </Link>
                </div>
            </div>
            </>
        )
    
}

export default Header;