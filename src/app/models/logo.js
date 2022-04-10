const mongoose = require('mongoose');

const LogoSchema = new mongoose.Schema({
    name: { type: String, default: 'Logo_trung tâm' },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model('logo', LogoSchema);