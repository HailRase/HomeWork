import React, {useState} from 'react';
import {RequestAPI} from "../api/RequestAPI";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [info, setInfo] = useState<string[]>()
    const requestOnClickHandler = () => {
        RequestAPI.postRequest(checked)
            .then(response => {
                setInfo([response.data.errorText, response.data.info])
                return response.data
            })
            .catch(error => {
                setInfo([error.response.data.errorText, error.response.data.info])
            })
    }

    const onCheckedChange = () => setChecked(!checked)

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onCheckedChange}/>
            <button onClick={requestOnClickHandler}>Send request</button>
            <div><textarea value={info} rows={5} cols={30}></textarea></div>
        </div>
    );
};

export default Request;