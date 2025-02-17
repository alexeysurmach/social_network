import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to ='/profile' activeClassName={s.actviveLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/dialogs' activeClassName={s.actviveLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/news' activeClassName={s.actviveLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to  ='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = 'settings'>Settings </NavLink>
            </div>
        </nav>
}

export default Navbar;