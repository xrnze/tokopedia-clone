const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.set('debug',true);

const KurirSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: 'String',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    waktu: {
        type: 'String',
        default: '1 hari'
    }
})

module.exports = mongoose.model('Kurir', KurirSchema)