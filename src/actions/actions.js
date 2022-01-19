import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (fruit) => {
    return({type:FETCH_SUCCESS, payload: fruit});
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}