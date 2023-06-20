import express, { json } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import agendaRoutes from './routes/agenda.js';

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/agenda', agendaRoutes);
app.all('*', (req, res) => {
    res.send('404 Page not found');
})

app.listen(port, () => {

    console.log(`Server is running on port: http://localhost:${port}`);

});