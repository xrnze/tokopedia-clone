const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.set('debug',true);

const CartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Products'
    },
    qty: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Cart', CartSchema);