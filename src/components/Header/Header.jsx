import React from 'react';
import s from './Header.module.css';
const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://bower.io/img/bower-logo.png'/>
        </header>
    )
}

export default Header;