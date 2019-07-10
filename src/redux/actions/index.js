import { getCharacters } from '../../api';


export const SET_CHARACTERS_LOADING = 'SET_CHARACTERS_LOADING';
export const setCharactersLoading = (isLoading) => {
    return {
        type: SET_CHARACTERS_LOADING,
        isLoading
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

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const actionGetCharacters = (currentPage) => {
    return async (dispatch, getState) => {
        dispatch(setCharactersLoading(true));
        try {
            currentPage = currentPage || getState().currentPage;
            const { results=[], count } = await getCharacters(currentPage);
            const characters = results;
            const totalPages = Math.round(count / 10);
            dispatch(setCharacters(characters));
            dispatch(setTotalPages(totalPages));
            dispatch(setCurrentPage(currentPage));
        } catch (error) {
            dispatch(setCharactersError(error));
        } finally {
            dispatch(setCharactersLoading(false));
        }
    }
}


