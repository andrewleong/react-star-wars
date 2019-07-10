import {
    SET_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CHARACTERS_ERROR,
} from "../actions";

const INITIAL_STATE = {
    characters: []
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

        default:
            return state
    }
}
