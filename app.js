import express from 'express';

import cors from 'cors'
import { router } from './router/user.js';

export const app = express();
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173','https://harshu-shop.netlify.app'],
    credentials:true,
}))


app.use("/user",router)



