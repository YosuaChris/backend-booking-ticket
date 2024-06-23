/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: API to manage basketball ticket booking
 */

/**
 * @swagger
 * /tickets:
 *   get:
 *     summary: Get all tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Success. Returns list of all tickets.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   tanggal_pertandingan:
 *                     type: string
 *                   team:
 *                     type: string
 *                   harga:
 *                     type: number
 *                   stock_tiket:
 *                     type: number
 *               example:
 *                 - _id: 5fb3a5a3548d6e1247dcf235
 *                   tanggal_pertandingan: "2024-07-03T19:00:00"
 *                   team: "Tim A vs Tim B"
 *                   harga: 90000
 *                   stock_tiket: 20
 */

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tanggal_pertandingan:
 *                 type: string
 *                 format: date-time
 *               team:
 *                 type: string
 *               harga:
 *                 type: number
 *               stock_tiket:
 *                 type: integer
 *             example:
 *               tanggal_pertandingan: "2024-07-03T19:00:00"
 *               team: "Tim A vs Tim B"
 *               harga: 90000
 *               stock_tiket: 20
 *     responses:
 *       201:
 *         description: Successfully created a new ticket
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 tanggal_pertandingan:
 *                   type: string
 *                   format: date-time
 *                 team:
 *                   type: string
 *                 harga:
 *                   type: number
 *                 stock_tiket:
 *                   type: integer
 *               example:
 *                 _id: 5fb3a5a3548d6e1247dcf235
 *                 tanggal_pertandingan: "2024-07-03T19:00:00"
 *                 team: "Tim A vs Tim B"
 *                 harga: 90000
 *                 stock_tiket: 20
 */

const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Rute untuk melihat daftar tiket yang tersedia
router.get('/', ticketController.getTickets);

// Rute untuk menambahkan tiket baru
router.post('/', ticketController.createTicket);

module.exports = router;
