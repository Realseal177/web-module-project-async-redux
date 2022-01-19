import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from './../actions/actions';

const initialState = {
    fruit: {
        name: 'Apple',
        family: 'Rosaceae',
        nutritions: {
            carbohydrates: 11.4,
            protein: 0.3,
            fat: 0.4,
            calories: 52,
            sugar: 10.3
        },
    },
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
          return {
            ...state,
            fruit: {},
            isFetching: true,
            error: ''
          };
        case FETCH_FAIL:
          return {
            ...state,
            fruit:{},
            isFetching: false,
            error: action.payload
          };
        case FETCH_SUCCESS:
          return {
            ...state,
            fruit: action.payload,
            isFetching: false,
            error: ''
          };
        default:
          return state;
      }
}