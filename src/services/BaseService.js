import { HTTPClient } from '../utils/Request'
export default class BaseService {
    constructor (api) {
        this.api = api
        this.http = HTTPClient
    }
    list = async () => {
        try {
            const response = await this.http.get(this.api)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }
    show = async ($id) => {
        try {
            const response = await this.http.get(`${this.api}/${$id}`)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }

    create = async ($data) => {
        try {
            const response = await this.http.post(this.api, $data)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }

    update = async ($data) => {
        try {
            const response = await this.http.put(`${this.api}/${$data.id}`, $data)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }

    remove = async ($id) => {
        try {
            const response = await this.http.delete(`${this.api}/${$id}`)
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }
}