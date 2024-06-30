import axios from 'axios'
import VueAxios from 'vue-axios'
import Environment from '/src/models/interface/Environment';

axios.interceptors.request.use(function (config){
    config.baseURL = process.env.BACKEND_URL
    const userJwt = Environment.find('userJwt')
    const bearer = userJwt.value ? {"Authorization": "Bearer " + userJwt.value} : {}
    config.headers = {
        ...config.headers,
        "Access-Control-Allow-Origin":"*",
        ...bearer
    }
    return config
}, function (error) {
    console.log("Axios Request Error: ", error)
    return Promise.reject(error)
})

axios.interceptors.response.use(function (config){
    return config
}, function (error) {
    console.log("Axios Response Error: ", error)
    return Promise.reject(error)
})

export function createAxios (app){
    app.use(VueAxios, {axios: axios})
}