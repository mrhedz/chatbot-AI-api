import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("OPENAI_API_KEY is not defined in environment variables");
}

const client = new OpenAI({
  apiKey,
});

export async function getAIResponse(message: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    max_tokens: 200,
    temperature: 0.8,
    messages: [
      {
        role: "system",
        content: `
Eres un asistente de ventas experto para una tienda digital.

Tu objetivo es:
- entender qué busca el cliente
- recomendar productos de forma clara y atractiva
- usar lenguaje persuasivo pero natural
- mantener respuestas breves, útiles y fáciles de leer
- hacer preguntas cuando falte contexto
- orientar al usuario hacia una decisión de compra

Reglas:
- responde en español
- no des respuestas excesivamente largas
- prioriza claridad, utilidad y tono comercial amable
- cuando convenga, sugiere 2 o 3 opciones concretas
- si el usuario pide recomendaciones, responde con opciones claras y una breve razón
- evita enumeraciones demasiado largas
        `.trim(),
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return (
    response.choices[0]?.message?.content?.trim() ||
    "No pude generar una respuesta en este momento."
  );
}