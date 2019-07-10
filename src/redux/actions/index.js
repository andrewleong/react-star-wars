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

export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        totalPages
    }
};

export const actionGetCharacters = (currentPage) => {
    return async (dispatch) => {
        dispatch(setCharactersLoading(true));
        try {
            const { results=[], count } = await getCharacters(currentPage);
            const characters = results;
            const totalPages = Math.round(count / 10);
            dispatch(setCharacters(characters));
            dispatch(setTotalPages(totalPages));
        } catch (error) {
            dispatch(setCharactersError(error));
        } finally {
            dispatch(setCharactersLoading(false));
        }
    }
}


