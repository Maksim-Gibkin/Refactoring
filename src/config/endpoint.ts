const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'

export const endpoint = {
    user: {
        list: `${API_ENDPOINT}/users`,
        one: (id: number) =>`${API_ENDPOINT}/users/${id}`,
    },
}