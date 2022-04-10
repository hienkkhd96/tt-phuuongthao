const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hienkkhd:hienanh96@hiendev.tzzxa.mongodb.net/tt-phuongthao');
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = { connect };