import express from 'express';
import './database/connection';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('Server on PORT 3333');
});