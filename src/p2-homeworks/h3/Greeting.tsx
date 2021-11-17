import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {GreetingContainerPropsType} from "./GreetingContainer";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = s.error
    const buttonError = s.buttonError
    return (
        <div className={s.inputContent}>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            className={error ? inputClass : ''}
            />

            <SuperButton onClick={addUser}
                         disabled={!name ? true : false}
                         className={!name || error ? buttonError : s.button}>
                add
            </SuperButton>
            <div><span className={s.usersStyle}>{totalUsers}</span></div>
            {error && <div className={s.messageError}>{error}</div>}
        </div>
    )
}

export default Greeting
