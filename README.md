# Chatbot IA para Ventas - Frontend (React + TypeScript)

Interfaz web desarrollada con React y TypeScript para un chatbot inteligente enfocado en recomendaciones de productos y asistencia conversacional.

---

## Descripción

Aplicación frontend diseñada para interactuar con una API de inteligencia artificial, permitiendo a los usuarios enviar mensajes y recibir respuestas dinámicas en tiempo real.

El sistema está enfocado en ofrecer una experiencia conversacional moderna, clara y fluida, ideal para integrarse en plataformas web, e-commerce o productos SaaS.

---

## Features

- Interfaz conversacional tipo chat  
- Integración con API backend basada en IA  
- Auto-scroll al último mensaje  
- Indicador de escritura (typing)  
- Sugerencias rápidas para mejorar la interacción  
- Input siempre visible (UX optimizada)  
- Diseño responsive y moderno  

---

## Tecnologías

- React  
- TypeScript  
- Vite  
- Axios  
- CSS personalizado  

---

## Instalación

~~~bash
git clone https://github.com/mrhedz/chatbot-ai-sales-frontend.git
cd chatbot-ai-sales-frontend
npm install
~~~

---

## Variables de entorno

Crear archivo `.env` en la raíz del proyecto:

~~~env
VITE_API_URL=http://localhost:3000/api/chat
~~~

---

## Ejecutar aplicación

~~~bash
npm run dev
~~~

---

## Flujo de uso

- El usuario escribe un mensaje en la interfaz  
- El frontend envía la petición al backend  
- La API procesa el mensaje con IA  
- Se recibe la respuesta y se renderiza en el chat  
- Se muestran sugerencias para continuar la conversación  

---

## Casos de uso

- Chatbots para e-commerce  
- Asistentes de ventas digitales  
- Landing pages con IA  
- Productos SaaS con interfaz conversacional  

---

## Estructura del proyecto

src/
  components/
  hooks/
  services/
  types/
  styles/

---

## Notas

- Requiere una API backend activa para funcionar  
- Diseñado con enfoque en experiencia de usuario (UX)  
- Arquitectura preparada para escalar nuevas funcionalidades  

---

## Autor

Martin Hernandez  
Frontend & Backend Developer especializado en interfaces modernas y experiencias conversacionales
