import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div className={s.block}>
                    <div className={s.header}>
                        <Header/>
                    </div>
                    <div className={s.select}>SELECT LEVEL </div>
                </div>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
