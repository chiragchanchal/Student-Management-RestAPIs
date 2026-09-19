const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middleware/logger');

const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use('/students', studentRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route Not Found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server Error" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
