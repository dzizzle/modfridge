const {Schema, model} = require('mongoose');



const itemSchema = new Schema ({
    name: {type: String, required: true},
    quantity: {type: String, required: true},
    type: {type: String, required: true},
    other: String
}, 
{timestamps: true}
)








module.exports = model('Item', itemSchema);