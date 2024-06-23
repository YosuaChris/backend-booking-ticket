const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const swaggerSetup = require('./config/swagger');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const ticketRoutes = require('./routes/tickets');
const orderRoutes = require('./routes/orders');

app.use('/tickets', ticketRoutes);
app.use('/orders', orderRoutes);

// Setup Swagger
swaggerSetup(app);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});