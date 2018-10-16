const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    cart: [],
    data: {}
}

const cart = function(state = initialState, action){
    switch (action.type) {
        case 'FETCH_CART_PENDING':
            return {...state, fetching: true};
            break;
        case 'FETCH_CART_FULFILLED':
            return {...state, fetching: false, fetched: true, cart: action.payload.data};
            break;
        case 'FETCH_CART_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload}
            break;

        case 'SAVE_CART_PENDING':
            return {...state, fetching: true};
            break;
        case 'SAVE_CART_FULFILLED':
            return {...state, fetching: false, fetched: true, cart: action.payload.data};
            break;
        case 'SAVE_CART_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload}
            break;
        
        case 'DELETE_ITEM_PENDING':
            return {...state, fetching: true};
            break;
        case 'DELETE_ITEM_FULFILLED':
            const deleted = state.cart.filter(data => {
                return data._id !== action.payload.data._id
            })
            return {...state, fetching: false, fetched: true, cart: deleted};
            break;
        case 'DELETE_ITEM_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload}
            break;
        
        case 'DELETE_CART_PENDING':
            return {...state, fetching: true};
            break;
        case 'DELETE_CART_FULFILLED':
            const cartDeleted = state.cart.filter(data => {
                return data !== action.payload.data
            })
            return {...state, fetching: false, fetched: true, cart: cartDeleted};
            break;
        case 'DELETE_CART_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload}
            break;
        
        case 'UPDATE_CART_PENDING':
            return {...state, fetching: true};
            break;
        case 'UPDATE_CART_FULFILLED':
            return {...state, fetching: false, fetched: true, data: action.payload.data};
            break;
        case 'UPDATE_CART_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload.data}
        
        default:
            return state;
            break;
    }
}

export default cart;