import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from './../actions/actions';

const initialState = {
    brew: [{}],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
          return {
            ...state,
            brew: [],
            isFetching: true,
            error: ''
          };
        case FETCH_FAIL:
          return {
            ...state,
            brew:[],
            isFetching: false,
            error: action.payload
          };
        case FETCH_SUCCESS:
          return {
            ...state,
            brew: action.payload,
            isFetching: false,
            error: ''
          };
        default:
          return state;
      }
}