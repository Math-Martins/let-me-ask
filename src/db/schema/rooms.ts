import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
// nome da tabela
export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(), // o banco de dados gerará esse id aleatoriamente
  name: text().notNull(),
  descripton: text(),
  createAt: timestamp().defaultNow().notNull(),
});
