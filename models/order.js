const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true,
    },
    status_pembayaran: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending',
    },
    kode_qr: {
        type: String,
        default: null,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);