import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

export type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        const validation = /^[a-zA-Z]{0,30}$/
        if (!validation.test(e.currentTarget.value) && e.currentTarget.value)
        {
            setError('The name should consist only of Latin letters and not exceed 30 letters.')
        }else {
            setName(e.currentTarget.value)
            setError('')
        }

    }
    const addUser = () => {
        if (name){
            addUserCallback(name)
            setName('')
            alert(`Hello, ${name}!`)// need to fix
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
