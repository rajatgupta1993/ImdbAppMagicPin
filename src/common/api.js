import * as Constants from './constants';

export function getHomeData() {
    const url = Constants.HOME_PAGE_URL;
    return fetch(url)
        .then((resp) => resp.json())
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
           console.log(error);
        });
}

export function searchMovie(query){
    const url = Constants.SEARCH_BASE_URL + query;

    return fetch(url)
    .then((resp) => resp.json())
        .then((dataFromServer) => {
            return dataFromServer;
        }).catch(function (error) {
           console.log(error);
        });
}
