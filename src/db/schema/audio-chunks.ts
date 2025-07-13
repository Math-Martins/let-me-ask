import { pgTable, text, timestamp, uuid, vector } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const audioChunks = pgTable('audio_chunks', {
  id: uuid().primaryKey().defaultRandom(), // o banco de dados gerará esse id aleatoriamente
  roomId: uuid().references(() => rooms.id).notNull(),
  transcription: text().notNull(),
  embeddings: vector({ dimensions: 768 }).notNull(),
  createAt: timestamp().defaultNow().notNull(),
});
