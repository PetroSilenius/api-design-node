import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log(req.method, req.url);
  res.status(200);
  res.json({ message: 'Hello from Express' });
});

export default app;