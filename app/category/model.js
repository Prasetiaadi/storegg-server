const mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama kategori harus diisi']
    }
})

module.exports = mongoose.model('category', categorySchema);