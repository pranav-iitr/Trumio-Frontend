import axios from 'axios'

export const AIAPI = 'http://localhost:8000' 
export function addQueryParams(urlString, queryParams) {
    const query = Object.keys(queryParams)
        .map((k) => {
            if (Array.isArray(queryParams[k])) {
                return queryParams[k].map((val) => `${k}[]=${val}`).join('&')
            }
            return `${k}=${queryParams[k]}`
        })
        .join('&')
    return `${urlString}?${query}`
}




export function request(
    method,
    url,
    data,
    contentType = 'application/json'
) {
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': contentType,
        }

        
        axios({
            method,
            url,
            data,
            headers,
            // withCredentials: true,
            responseType: 'json',
        })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.status === 401) {
                        removeToken()
                    }
                }
                reject(err)
            })
    })
}

export const getErrorBody = (error) => {
    let response = {}
    try {
        response = error.response
    } catch (err) {
        response = {}
    }
    response = response || {}
    const outputErrorBody = {
        ...response?.data?.detail,
        status: response.status ? response.status : 408,
    }
    return outputErrorBody
}

