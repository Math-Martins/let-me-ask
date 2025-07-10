import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(), // o banco de dados gerará esse id aleatoriamente
  roomId: uuid().references(() => rooms.id).notNull(),
  question: text().notNull(),
  answer: text(),
  createAt: timestamp().defaultNow().notNull(),
});
