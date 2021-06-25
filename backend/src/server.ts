import 'reflect-metadata';
import './database';

import express from 'express';
import { getCustomRepository } from 'typeorm';
import DirectorsRepository from './repositories/DirectorsRepository';

const app = express();
app.use(express.json());

app.get('/director', async (_req, res) => {
  const repository = getCustomRepository(DirectorsRepository);
  const directors = await repository.getAll();
  return res.status(200).json(directors);
});

app.post('/director', async (req, res) => {
  const { email, name, password_hash } = req.body;
  const repository = getCustomRepository(DirectorsRepository);

  const userAlreadyExists = await repository.findOne({ where: { email } });

  if (userAlreadyExists) return res.status(400).json({ message: 'User already exists' });
  if (!email || !name || !password_hash) return res.status(400).json({ message: 'Somenthings goes wrong' });

  const director = repository.create({
    email,
    name,
    password_hash,
  });
  await repository.save(director);

  return res.status(200).json(director);
});

app.listen(3000);
