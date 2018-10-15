import axios from 'axios';

export function fetchProducts(){
    return{
        type: 'FETCH_PRODUCTS',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.18:5000/api/products/'
        })
    }
}

export function getProduct(id){
    return{
        type: 'GET_PRODUCT',
        payload: axios({
            method: 'GET',
            url: `http://192.168.0.18:5000/api/products/${id}`
        })
    }
}