import { getCharacters } from '../../api';


export const SET_CHARACTERS_LOADING = 'SET_CHARACTERS_LOADING';
export const setCharactersLoading = (characters) => {
    return {
        type: SET_CHARACTERS_LOADING,
        characters
    }
};

export const SET_CHARACTERS = 'SET_CHARACTERS';
export const setCharacters = (characters) => {
    return {
        type: SET_CHARACTERS,
        characters
    }
};

export const SET_CHARACTERS_ERROR = 'SET_CHARACTERS_ERROR';
export const setCharactersError = (error) => {
    return {
        type: SET_CHARACTERS_ERROR,
        error
    }
};

export const actionGetCharacters = () => {
    return async (dispatch) => {
        dispatch(setCharactersLoading(true));
        try {
            const characters = await getCharacters();
            console.log("characters", characters)
            // dispatch(setCharacters(characters);
        } catch (error) {
            dispatch(setCharactersError(error));
        } finally {
            dispatch(setCharactersLoading(false));
        }
    }
}

