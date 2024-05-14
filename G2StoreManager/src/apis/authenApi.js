import axios from 'axios'

const authenApi = {
    adminSignin(username, password) {
        const url = `${process.env.expo_public_api_url}admin/signin`
        return axios.get(url, { params: { username, password } })
    }
}

export default authenApi
