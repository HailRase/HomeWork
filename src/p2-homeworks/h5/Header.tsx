import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div >
            <NavLink to="/pre-junior" className={s.link}>PRE-JUNIOR</NavLink>
            <NavLink to="/junior" className={s.link}>JUNIOR</NavLink>
            <NavLink to="/junior-plus" className={s.link}>JUNIOR+</NavLink>
        </div>
    )
}

export default Header
