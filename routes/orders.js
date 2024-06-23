/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API to manage basketball ticket orders
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: string
 *             example:
 *               ticket_id: 5fb3a5a3548d6e1247dcf235
 *     responses:
 *       201:
 *         description: Successfully created an order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 ticket_id:
 *                   type: string
 *                 status_pembayaran:
 *                   type: string
 *                 kode_qr:
 *                   type: string
 *               example:
 *                 _id: 5fb3a5a3548d6e1247dcf235
 *                 ticket_id: 5fb3a5a3548d6e1247dcf235
 *                 status_pembayaran: pending
 *                 kode_qr: null
 */

/**
 * @swagger
 * /orders/{order_id}/verify-payment:
 *   post:
 *     summary: Verify payment for an order and generate QR code
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to verify payment
 *     responses:
 *       200:
 *         description: Successfully verified payment and generated QR code
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 ticket_id:
 *                   type: string
 *                 status_pembayaran:
 *                   type: string
 *                 kode_qr:
 *                   type: string
 *               example:
 *                 _id: 5fb3a5a3548d6e1247dcf235
 *                 ticket_id: 5fb3a5a3548d6e1247dcf235
 *                 status_pembayaran: success
 *                 kode_qr: "https://example.com/qrcode/5fb3a5a3548d6e1247dcf235"
 */

/**
 * @swagger
 * /orders/{order_id}/qr-code:
 *   get:
 *     summary: Get QR code for an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to get QR code
 *     responses:
 *       200:
 *         description: Successfully retrieved QR code
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kode_qr:
 *                   type: string
 *               example:
 *                 kode_qr: "https://example.com/qrcode/5fb3a5a3548d6e1247dcf235"
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Success. Returns list of all orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   ticket_id:
 *                     type: string
 *                   status_pembayaran:
 *                     type: string
 *                   kode_qr:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *               example:
 *                 - _id: 5fb3a5a3548d6e1247dcf235
 *                   ticket_id: 5fb3a5a3548d6e1247dcf235
 *                   status_pembayaran: pending
 *                   kode_qr: null
 *                   created_at: "2024-07-01T12:00:00"
 */

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Rute untuk memesan tiket
router.post('/', orderController.createOrder);

// Rute untuk menampilkan semua data order
router.get('/', orderController.getAllOrders);

// Rute untuk verifikasi pembayaran dan menghasilkan kode QR
router.post('/:order_id/verify-payment', orderController.verifyPayment);

// Rute untuk menampilkan kode QR
router.get('/:order_id/qr-code', orderController.getQRCode);

module.exports = router;
