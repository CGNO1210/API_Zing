import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import cors from 'cors';
require('dotenv').config();

let app = express();

//config app
app.use(cors({ origin: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Backend nodejs is running on the port: http://localhost:${port}`);
})