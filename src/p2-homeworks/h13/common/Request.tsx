import React, {useState} from 'react';
import {RequestAPI} from "../api/RequestAPI";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(true)

    const requestOnClickHandler = () => {
        RequestAPI.postRequest(checked)
        console.log(checked)
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