export const baseUrl = "http://localhost:3001"

export const request = {
  fetch: function (path, params) {
    return fetch(baseUrl + path)
  },
}