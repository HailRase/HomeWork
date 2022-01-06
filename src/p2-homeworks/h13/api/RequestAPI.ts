import * as axios from "axios";


type RequestAPIPostType = {

}

export const RequestAPI = {
    postRequest(success: boolean){
        return axios.default.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
            .then(response => {
                return response
            })
    }
}