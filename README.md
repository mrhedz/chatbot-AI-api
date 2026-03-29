Chatbot IA para Ventas - API Backend

API backend para un chatbot inteligente enfocado en recomendaciones de productos y asistencia conversacional.

Descripción

Esta API permite generar respuestas inteligentes en lenguaje natural a partir de mensajes del usuario, simulando un asistente de ventas.

Está diseñada para integrarse fácilmente en aplicaciones web, e-commerce o plataformas SaaS.

Funcionalidades
Respuestas generadas con inteligencia artificial
Recomendaciones dinámicas de productos
Sugerencias rápidas para mejorar la experiencia del usuario
Endpoint de chat listo para integración
Endpoint de salud para monitoreo
Tecnologías
Node.js
TypeScript
Express
OpenAI API
Endpoints
Health

GET /health

Respuesta:
{
"success": true
}

Chat

POST /api/chat

Body:
{
"message": "Quiero una bebida refrescante"
}

Respuesta:
{
"success": true,
"botReply": "Te recomiendo una bebida fría con notas cítricas.",
"suggestedReplies": [
"Quiero algo sin azúcar",
"Muéstrame opciones refrescantes"
]
}

Ejecutar en local

git clone <repo-url>
cd chatbot-ai-sales-api
npm install
npm run dev

Variables de entorno

OPENAI_API_KEY=openai_api_key
PORT=3000

Casos de uso

Chatbots para e-commerce
Asistentes de ventas con IA
Automatización de atención al cliente
Interfaces conversacionales en productos SaaS

Autor

Martin Hernandez
Backend Developer especializado en APIs, microservicios e integraciones
