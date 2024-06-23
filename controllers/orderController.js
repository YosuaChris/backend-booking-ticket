const Order = require('../models/order');
const Ticket = require('../models/ticket');

// Controller untuk memesan tiket
exports.createOrder = async (req, res) => {
    try {
        const { ticket_id } = req.body;

        // Cek apakah tiket tersedia
        const ticket = await Ticket.findById(ticket_id);
        if (!ticket) {
            return res.status(404).json({ message: "Tiket tidak ditemukan." });
        }

        // Cek apakah masih tersedia stok tiket
        if (ticket.stock_tiket <= 0) {
            return res.status(400).json({ message: "Tiket untuk pertandingan ini telah habis." });
        }

        // Buat pesanan baru
        const newOrder = new Order({
            ticket_id,
            status_pembayaran: "pending",
        });
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller untuk verifikasi pembayaran dan menghasilkan kode QR
exports.verifyPayment = async (req, res) => {
    const { order_id } = req.params;

    try {
        let order = await Order.findById(order_id);
        if (!order) {
            return res.status(404).json({ message: "Pemesanan tidak ditemukan." });
        }

        // Simulasikan verifikasi pembayaran (misalnya: langsung set status ke success)
        order.status_pembayaran = "success";
        order.kode_qr = "https://example.com/qrcode/" + order_id;
        await order.save();

        // Kurangi stok tiket yang tersedia
        const ticket = await Ticket.findById(order.ticket_id);
        if (ticket) {
            ticket.stock_tiket -= 1; // Misalnya, mengurangi 1 tiket dari stok
            await ticket.save();
        }

        res.json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller untuk mendapatkan semua data order
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller untuk menampilkan kode QR
exports.getQRCode = async (req, res) => {
    const { order_id } = req.params;

    try {
        let order = await Order.findById(order_id);
        if (!order) {
            return res.status(404).json({ message: "Pemesanan tidak ditemukan." });
        }

        if (!order.kode_qr) {
            return res.status(404).json({ message: "Kode QR tidak tersedia untuk pemesanan ini." });
        }

        // Di sini Anda dapat mengirimkan kode QR (misalnya: sebagai gambar atau URL)
        res.json({ kode_qr: order.kode_qr });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
