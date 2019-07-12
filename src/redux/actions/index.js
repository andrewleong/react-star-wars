import _ from 'underscore';
import {
    getCharacters,
    getCharacter,
    getHomeWorld,
    getFilms,
    getSpecies,
} from '../../api';


export const SET_CHARACTERS_LOADING = 'SET_CHARACTERS_LOADING';
export const setLoading = (isLoading) => {
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

export const SET_ERROR = 'SET_ERROR';
export const setError = (error) => {
    return {
        type: SET_ERROR,
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

export const SET_CHARACTER = 'SET_CHARACTER';
export const setCharacter = (character) => {
    return {
        type: SET_CHARACTER,
        character
    }
};

export const SET_HOME_WORLD = 'SET_HOME_WORLD';
export const setHomeWorld = (homeWorld) => {
    return {
        type: SET_HOME_WORLD,
        homeWorld
    }
};

export const SET_FILMS = 'SET_FILMS';
export const setFilms = (films) => {
    return {
        type: SET_FILMS,
        films
    }
}

export const SET_SPECIES = 'SET_SPECIES';
export const setSpecies = (species) => {
    return {
        type: SET_SPECIES,
        species
    }
}

export const actionGetCharacters = (currentPage) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        try {
            currentPage = currentPage || getState().currentPage;
            const { results=[], count } = await getCharacters(currentPage);
            const characters = _.indexBy(results, "name");
            const totalPages = Math.round(count / 10);
            dispatch(setCharacters(characters));
            dispatch(setTotalPages(totalPages));
            dispatch(setCurrentPage(currentPage));

        } catch (error) {
            dispatch(setError(error));
        } finally {
            dispatch(setLoading(false));
        }
    }
}

export const actionGetCharacter = (id, existingCharacter) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            let character = existingCharacter;
            if(!existingCharacter){
                character = await getCharacter(id);
            }
            dispatch(setCharacter(character));

        } catch (error) {
            dispatch(setError(error));
        }
    }
}

export const actionGetHomeWorld = (path) => {
    return async (dispatch) => {
        try {
            const homeWorld = await getHomeWorld(path);
            dispatch(setHomeWorld(homeWorld));

        } catch (error) {
            dispatch(setError(error));
        }
    }
}

export const actionGetFilms = (paths) => {
    return async (dispatch) => {
        try {
            let films = [];
            if(paths.length) {
                films = await Promise.all(paths.map(path => getFilms(path)))
            }
            dispatch(setFilms(films));

        } catch (error) {
            dispatch(setError(error));
        }
    }
}

export const actionGetSpecies = (paths) => {
    return async (dispatch) => {
        try {
            let species = [];
            if(paths.length) {
                species = await Promise.all(paths.map(path => getSpecies(path)))
            }
            dispatch(setSpecies(species));

        } catch (error) {
            dispatch(setError(error));
        }
    }
}


