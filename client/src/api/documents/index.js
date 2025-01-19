import { resolve } from '../../helpers/resolve-response'
import axios from '@api'

export async function fetchDocuments(endpoint) {
    const authResponse = await resolve(axios.get(`/${endpoint}`))
    return authResponse.data
}

export async function deleteDocument(endpoint, id) {
    const authResponse = await resolve(axios.patch(`/${endpoint}/delete/${id}`))
    return authResponse.data
}

export async function fetchDocumentCount(endpoint) {
    const authResponse = await resolve(axios.get(`/${endpoint}/document-count`))
    return authResponse.data
}

export async function createDocument(endpoint, data) {
    const authResponse = await resolve(axios.post(`/${endpoint}`, data))
    return authResponse.data
}

export async function fetchSingleDocument(endpoint, id) {
    const authResponse = await resolve(axios.get(`/${endpoint}/${id}`))
    return authResponse.data
}
