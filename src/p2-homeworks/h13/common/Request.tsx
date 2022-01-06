import React, {useState} from 'react';
import {RequestAPI} from "../api/RequestAPI";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const requestOnClickHandler = () => {
        RequestAPI.postRequest(checked)
            .then(response => {
                console.log(response.data)
                return response.data
            })
            .catch(error => {
                console.log({...error})
                console.log()
            })
        }

    const onCheckedChange = () => setChecked(!checked)

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onCheckedChange}/>
            <button onClick={requestOnClickHandler}>Send request</button>
        </div>
    );
};

export default Request;