import * as ActionTypes from '../common/actionTypes';

const initialState = {
    movies: {},
    isLoading:true,
};

export default function HomeReducer(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SAVE_HOME_DATA:
            return { ...state, movies: action.data };

        case ActionTypes.START_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.STOP_LOADING:
           return { ...state, isLoading: false };

        default:
            return state;
    }
} 