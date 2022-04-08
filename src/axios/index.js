import Axios from 'axios'

const development = process.env.NODE_ENV !== 'production'
const baseUrl = development ? 'http://0.0.0.0/api/' : 'https://api.zackcpetersen.com/api/'

const axios = Axios.create({
    baseURL: baseUrl
})

export default axios
