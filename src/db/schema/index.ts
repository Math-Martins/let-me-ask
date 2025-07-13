// Barrel File (arquivo que reexporta todos os arquivos que estão dentro)

import { audioChunks } from "./audio-chunks.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
    rooms,
    questions,
    audioChunks,
}