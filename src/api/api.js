import axios from 'axios';


// Axios instance for api calls
const instance = axios.create({
    baseURL: "https://my-morty-backend.herokuapp.com/api",
    // baseURL: "http://localhost:8000/api",
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
        debugger;
        return instance.post('banks', bank)
            .then(res => res.data)
            .catch(function (error) {
                console.log(error);
            });
    },
    update: (bank) => {
        return instance.put(`banks`,{...bank}, { mode: 'cors' })
            .then(res => res.data);
    },
}