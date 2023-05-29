import express from 'express';
import payment from './routes/payment.routes';

const app = express();
app.listen(3000);
console.log('listening on http://localhost:3000');