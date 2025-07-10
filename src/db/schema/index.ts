// Barrel File (arquivo que reexporta todos os arquivos que estão dentro)

import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
    rooms,
    questions,
}