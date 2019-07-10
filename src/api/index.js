import axios from 'axios';

const CHARACTERS_PATH = 'https://swapi.co/api/people/';

export const getCharacters = () => (
    axios.get(CHARACTERS_PATH)
        .then(res => res.data)
        .catch(errors => errors)
)
