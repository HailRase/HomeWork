import React from 'react'
import s from './Affair.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.someClass}>
            <div className={s.affairName}>{props.affair.name + " "}</div>
            <div className={s.affairPriority}><span>{props.affair.priority}</span></div>
            <div className={s.button}>
                <SuperButton onClick={deleteCallback} red className={s.deleteButton}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
