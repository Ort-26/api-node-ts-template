import express from "express";
import { Request, Response } from 'express';
import * as dotenv from 'dotenv'; 

import cookieParser from 'cookie-parser'; 
dotenv.config();  

const port =  process.env.PORT || 3001;
const app = express();
const logger = require('./config/logger'); 

app.use(cookieParser())
app.use(express.json()); 

//app.use('/users',usersRoutes);

app.all('*', (req: Request, res: Response) => {
    res.status(404); 
});

app.listen(port, () => { 
    logger.info('Application started on port: ' + port);
});