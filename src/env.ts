// Garantir que a aplicação não execute se não tiver as variáveis ambientes que são obrigatórias

import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url().startsWith('postgresql://'),
    GEMINI_API_KEY: z.string()
})

export const env = envSchema.parse(process.env) // aonda estará as variáveis ambiente
