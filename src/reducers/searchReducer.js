import * as ActionTypes from '../common/actionTypes';

const initialState = {
    searchResults: {}
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SAVE_SEARCH_RESULTS:
            return { ...state, searchResults: action.data };

        default: return state;
    }
}