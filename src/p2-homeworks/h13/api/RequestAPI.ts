import  axios from "axios";


type RequestAPIPostType = {

}

export const RequestAPI = {
    postRequest(success: boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
            .then(response => {
                return response
            })
    }
}