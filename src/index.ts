import app from './server';
import dotenv from 'dotenv';
import config from './config';

dotenv.config();

app.listen(config.port, () => {
  console.log('Server is listening on http://localhost:3000');
});
