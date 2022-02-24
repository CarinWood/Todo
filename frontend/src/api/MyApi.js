import Axios from 'axios';

const MyApi = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default MyApi