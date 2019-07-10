import axios from 'axios';

export const getCharacters = (currentPage=1) => {
    const path = `https://swapi.co/api/people/?page=${currentPage}`;

    return axios.get(path)
        .then(res => res.data)
        .catch(errors => errors)
}
