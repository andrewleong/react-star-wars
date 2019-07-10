import {
    SET_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CHARACTERS_ERROR,
    SET_TOTAL_PAGES,
} from "../actions";

const INITIAL_STATE = {
    characters: [],
    totalPages: 1
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

        default:
            return state
    }
}
