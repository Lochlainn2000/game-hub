import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aa5aa380b14a462fa7862e508cf26025'
    }
})