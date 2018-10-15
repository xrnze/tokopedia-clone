const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    kurir: [],
    data: {}
}

const kurir = function(state = initialState, action){
    switch (action.type) {
        case 'FETCH_KURIR_PENDING':
            return {...state, fething: true};
            break;
        case 'FETCH_KURIR_FULFILLED':
            return {...state, fetching: false, fetched: true, kurir: action.payload.data};
            break;
        case 'FETCH_KURIR_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload};
            break;

        case 'GET_KURIR_PENDING':
            return {...state, fetching: true};
            break;
        case 'GET_KURIR_FULFILLED':
            return {...state, fetching: false, fetched: true, data: action.payload.data};
            break;
        case 'GET_KURIR_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload};
            break;

        default:
            return state;
            break;
    }
}

export default kurir;