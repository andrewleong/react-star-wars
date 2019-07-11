import axios from 'axios';

export const getCharacters = (currentPage=1) => {
    const path = `https://swapi.co/api/people/?page=${currentPage}`;

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => errors)
}

export const getCharacter = (id) => {
    const path = `https://swapi.co/api/people/${id}`;

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => errors)
}

export const getHomeWorld = (path) => {

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => errors)
}

export const getFilms = (path) => {

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => errors)
}


export const getSpecies = (path) => {

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => errors)
}
