import Axios from 'axios'

const development = process.env.NODE_ENV !== 'production'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
    // baseURL: development ? 'http:127.0.0.1:8000/api/'
})

export default axios
