
import { config } from 'dotenv';
import { app } from './app.js';
import {dbConnection} from './db/db.js';

config({ path: "./.env" })


dbConnection()


app.listen(5959)