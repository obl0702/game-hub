import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd6bd90cffc92466ca323da2247892c17'
    }
})