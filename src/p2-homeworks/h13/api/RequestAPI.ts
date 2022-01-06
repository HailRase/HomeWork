import * as axios from "axios";

export const RequestAPI = {
    postRequest(success: boolean){
        axios.default.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log( {...error} );
                console.log( error.response ? error.response.data.errorText : error.response.data.info )})
    }
}