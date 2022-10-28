// AUTHOR: BEDIRHAN PAMUKCUOGLU
// AUTHENTICATION END POINTS 

import axios from 'axios';

// LOGIN REQUEST
export const login = async (mail, password) => {
    baseurl = process.env.REACT_APP_SERVER_BASE_URL;

    axios.post(baseurl + "login", { mail, password })
    .then(resp => {
        if (resp.status == "200") return resp.data
        else throw new Error("500 - Server Error")
    })
    .catch(e => {
        alert(e)
        return e
    })
}

export default login


