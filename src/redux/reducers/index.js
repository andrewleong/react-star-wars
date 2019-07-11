import {
    SET_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CHARACTERS_ERROR,
    SET_TOTAL_PAGES,
    SET_CURRENT_PAGE,
    SET_CHARACTER,
    SET_HOME_WORLD,
    SET_FILMS,
    SET_SPECIES,
} from "../actions";

const INITIAL_STATE = {
    characters: {},
    character: {},
    totalPages: 1,
    currentPage: 1,
    isLoading: false,
    homeWorld: {},
    films: [],
    species: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            const { characters } = action;
            return {
                ...state,
                characters
            }
        }

        case SET_TOTAL_PAGES: {
            const { totalPages } = action;
            return {
                ...state,
                totalPages
            }
        }

        case SET_CURRENT_PAGE: {
            const { currentPage } = action;
            return {
                ...state,
                currentPage
            }
        }

        case SET_CHARACTERS_LOADING: {
            const { isLoading } = action;
            return {
                ...state,
                isLoading
            }
        }

        case SET_CHARACTER: {
            const { character } = action;
            return {
                ...state,
                character
            }
        }

        case SET_HOME_WORLD: {
            const { homeWorld } = action;
            return {
                ...state,
                homeWorld
            }
        }

        case SET_FILMS: {
            const { films } = action;
            return {
                ...state,
                films
            }
        }

        case SET_SPECIES: {
            const { species } = action;
            return {
                ...state,
                species
            }
        }

        default:
            return state
    }
}
