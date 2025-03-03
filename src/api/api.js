import { refreshAccessToken } from "./refreshAccessToken"

export const BASE_URL = "http://localhost:5000/api"

export const api = {
    get: async function (path, params = {}, token = null) {
        try {
            const response = await fetch(this.createUrl(path, params), {
                method: "GET",
                headers: this.createHeader(token)
            })

            // Проверяем статус ответа
            if (response.status === 401) {
                // Обновляем access token
                const newAccessToken = await refreshAccessToken()

                // Повторяем запрос с новым access token
                const newResponse = await fetch(this.createUrl(path, params), {
                    method: "GET",
                    headers: this.createHeader(newAccessToken)
                })

                return await newResponse.json()
            }

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    post: async function (path, element = {}, token = null) {
        try {
            const response = await fetch(this.createUrl(path), {
                method: "POST",
                headers: this.createHeader(token),
                body: JSON.stringify(element)
            })

            // Проверяем статус ответа
            if (response.status === 401) {
                // Обновляем access token
                const newAccessToken = await refreshAccessToken()

                // Повторяем запрос с новым access token
                const newResponse = await fetch(this.createUrl(path), {
                    method: "POST",
                    headers: this.createHeader(newAccessToken),
                    body: JSON.stringify(element)
                })

                return await newResponse.json()
            }

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    put: async function (path, element = {}, token = null) {
        try {
            const response = await fetch(this.createUrl(path), {
                method: "PUT",
                headers: this.createHeader(token),
                body: JSON.stringify(element)
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    patch: async function (path, element = {}, token = null) {
        try {
            const response = await fetch(this.createUrl(path), {
                method: "PATCH",
                headers: this.createHeader(token),
                body: JSON.stringify(element)
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    delete: async function (path, params = {}, token = null) {
        try {
            const response = await fetch(this.createUrl(path, params), {
                method: "DELETE",
                headers: this.createHeader(token)
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    createUrl: function (path, params) {
        const urlWithParams = new URL(BASE_URL + path)
        if (params) {
            Object.keys(params).forEach((key) =>
                urlWithParams.searchParams.append(key, params[key])
            )
        }
        return urlWithParams
    },
    createHeader: function (token) {
        const headers = { "Content-Type": "application/json" }
        if (token) {
            headers["Authorization"] = `Bearer ${token}`
        }
        return headers
    }
}
