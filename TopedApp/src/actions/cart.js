import axios from 'axios';

export function fetchCart(){
    return{
        type: 'FETCH_CART',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.18:5000/api/cart/'
        })
    }
}

export function saveCart(value){
    return{
        type: 'SAVE_CART',
        payload: axios({
            method: 'POST',
            url: 'http://192.168.0.18:5000/api/cart/',
            data: value
        })
    }
}

export function deleteItem(id){
    return{
        type: 'DELETE_ITEM',
        payload: axios({
            method: 'DELETE',
            url: `http://192.168.0.18:5000/api/cart/${id}`
        })
    }
}

export function deleteCart(){
    return{
        type: 'DELETE_CART',
        payload: axios({
            method: 'DELETE',
            url: 'http://192.168.0.18:5000/api/cart/'
        })
    }
}