import { defineConfig } from 'drizzle-kit'
import { schema } from './src/db/schema/index.ts'
import { env } from './src/env.ts'

export default defineConfig ({
    dialect: 'postgresql',
    casing: 'snake_case',
    schema: './src/db/schema/**.ts',
    out: './src/db/migrations',         // caminho dos create table
    dbCredentials: {
        url: env.DATABASE_URL,
    }
})          