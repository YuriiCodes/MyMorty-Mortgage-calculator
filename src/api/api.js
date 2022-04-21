import axios from 'axios';


// Axios instance for api calls
const instance = axios.create({
    baseURL: "https://my-morty-backend.herokuapp.com/api",
})

export const bankAPI = {
    getAll: () => {
        return instance.get('banks', { mode: 'cors' })
            .then(res => res.data);
    },
    delete: (id) => {
        return instance.delete(`banks/${id}`)
            .then(res => res.data);
    },
    create: (bank) => {
        return instance.post('banks', bank)
            .then(res => res.data);
    },
    update: (bank) => {
        return instance.put(`banks`, bank)
            .then(res => res.data);
    },
}