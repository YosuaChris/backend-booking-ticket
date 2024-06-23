const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    tanggal_pertandingan: { type: Date, required: true },
    team: { type: String, required: true },
    harga: { type: Number, required: true },
    stock_tiket: { type: Number, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);