import axios from 'axios'

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "08ef3733950442a8d85c83329db0b73b",
        page: 1,
        language: 'en-US'
    }
});

