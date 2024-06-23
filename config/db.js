const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://testingsaja:109230HKJHdaksjdhaisDSK@atlascluster.bu2nq1m.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
});
