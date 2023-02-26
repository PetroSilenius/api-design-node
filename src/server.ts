import express, { Request, Response } from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createUser, signIn } from './handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', protect, router);

app.post('/user', createUser);
app.post('/signin', signIn);

app.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  res.json({ message: `Faced an error: ${err.message}` });
});

export default app;
