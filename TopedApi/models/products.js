const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.set('debug',true);

const ProductsSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type: 'String',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    terkirim: {
        type: Number,
    },
    dilihat: {
        type: Number
    },
    asuransi: {
        type: 'String'
    },
    berat: {
        type: 'String'
    },
    transaksi: {
        type: 'String'
    },
    kondisi: {
        type: 'String'
    },
    pemesananMin: {
        type: 'String'
    },
    kategori: {
        type: 'String'
    },
    etalase: {
        type: 'String'
    },
    deskripsi: {
        type: 'String'
    },
    nama_penjual: {
        type: 'String'
    },
    avatar_penjual: {
        type: 'String'
    },
    lokasi_penjual: {
        type: 'String'
    },
    reputasi_penjual: {
        type: 'String'
    },
})
module.exports = mongoose.model('Products', ProductsSchema);