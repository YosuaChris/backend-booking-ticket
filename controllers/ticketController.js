const Ticket = require('../models/ticket');

// Controller untuk mendapatkan daftar tiket yang tersedia
exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller untuk menambahkan tiket baru
exports.createTicket = async (req, res) => {
    try {
        const { tanggal_pertandingan, team, harga, stock_tiket } = req.body;
        const newTicket = new Ticket({
            tanggal_pertandingan,
            team,
            harga,
            stock_tiket,
        });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
