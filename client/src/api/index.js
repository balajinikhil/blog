import axios from 'axios'

export default axios.create({
    baseURL:"http://localhost:1040/api/v1/"
})