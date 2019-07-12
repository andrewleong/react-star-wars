import axios from 'axios';

export const getCharacters = (currentPage=1) => {
    const path = `https://swapi.co/api/people/?page=${currentPage}`;

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => {
            throw errors.response.status
        })
}

export const getCharacter = (id) => {
    const path = `https://swapi.co/api/people/${id}`;

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => {
            throw errors.response.status
        })
}

export const getHomeWorld = (path) => {

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => {
            throw errors.response.status
        })
}

export const getFilms = (path) => {

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => {
            throw errors.response.status
        })
}


export const getSpecies = (path) => {

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => {
            throw errors.response.status
        })
}
