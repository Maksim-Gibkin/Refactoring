import { endpoint } from '../endpoint'

const getAll = () => {
    return fetch(endpoint.user.list)
      .then((response) => response.json())
}

export default { getAll }