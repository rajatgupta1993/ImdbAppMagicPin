import * as ActionTypes from '../common/actionTypes';

export function fetchHomeData(){
    return{
        type: ActionTypes.FETCH_HOME_DATA
    }
}

export function saveHomeData(data){
    return{
        type: ActionTypes.SAVE_HOME_DATA,
        data 
    }
} 

export function searchMovie(data){
    return {
        type: ActionTypes.SEARCH_MOVIE,
        data
    }
}

export function saveSearchResults(data){
    return{
        type: ActionTypes.SAVE_SEARCH_RESULTS,
        data
    }
}

export function startLoading(){
    return {
        type: ActionTypes.START_LOADING,
    };
}

export function stopLoading(){
    return {
        type: ActionTypes.STOP_LOADING,
    };
}

