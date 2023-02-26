import app from './server';
import dotenv from 'dotenv';

dotenv.config();

app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
