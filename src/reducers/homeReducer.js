import * as ActionTypes from '../common/actionTypes';

const initialState = {
    movies: {}
};

export default function HomeReducer(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SAVE_HOME_DATA:
            return { ...state, movies: action.data };

        default:
            return state;
    }
} 