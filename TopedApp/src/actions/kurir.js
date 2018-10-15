import axios from 'axios';

export function fetchKurir(){
    return{
        type: 'FETCH_KURIR',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.18:5000/api/kurir/'
        })
    }
}

export function getKurir(id){
    return{
        type: 'GET_KURIR',
        payload: axios({
            method: 'GET',
            url: `http://192.168.0.18:5000/api/kurir/${id}`
        })
    }
}