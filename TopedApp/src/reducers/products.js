const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    products: [],
    productDetail: {}
}

const products = function(state = initialState, action){
    switch (action.type) {
        case 'FETCH_PRODUCTS_PENDING':
            return {...state, fetching: true};
            break;
        case 'FETCH_PRODUCTS_FULFILLED':
            return {...state, fetching: false, fetched: true, products: action.payload.data};
            break;
        case 'FETCH_PRODUCTS_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload};
            break;

        case 'GET_PRODUCT_PENDING':
            return {...state, fetching: true};
            break;
        case 'GET_PRODUCT_FULFILLED':
            return {...state, fetching: false, fetched: true, productDetail: action.payload.data};
            break;
        case 'GET_PRODUCT_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload}
            break;

        default:
            return state;
            break;
    }
}

export default products;