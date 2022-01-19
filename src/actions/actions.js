import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getBrewery = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://api.openbrewerydb.org/breweries')
            .then(resp => {
                dispatch(fetchSuccess(resp.data))
                // console.log(resp.data);
            }).catch(err => {
                console.error(err)
            }).finally(console.log('axios call working'))
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (brew) => {
    return({type:FETCH_SUCCESS, payload: brew});
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}