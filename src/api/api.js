import axios from 'axios';


// Axios instance for api calls
const instance = axios.create({
    // baseURL: "https://my-morty-backend.herokuapp.com/api",
    baseURL: "http://localhost:8000/api",
    config: {
        mode: 'cors'
    }
})

export const bankAPI = {
    getAll: () => {
        return instance.get('banks')
            .then(res => res.data)
            .catch(err => {
                console.log(err);
            });
    },
    delete: (id) => {
        return instance.delete(`banks/${id}`)
            .then(res => res.data)
            .catch(err => {
                console.log(err);
            });
    },
    create: (bank) => {
        debugger;
        return instance.post('banks', bank)
            .then(res => res.data)
            .catch(err => {
                console.log(err);
            });
    },
    update: (bank) => {
        return instance.put(`banks`, {...bank})
            .then(res => res.data)
            .catch(err => {
                console.log(err);
            });
    },
}