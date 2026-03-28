import { products } from "../data/products";
import { normalizeText } from "../utils/normalizeText";
import { sessions } from "../data/sessions";

export const getChatbotResponse = (
  message: string,
  userId: string
): string => {
  const text = normalizeText(message);

  if (!sessions[userId]) {
    sessions[userId] = {
      step: "idle"
    };
  }

  const session = sessions[userId];

  if (!text) {
    return "Por favor escribe un mensaje.";
  }

  // REINICIAR / INICIO
  if (
    text === "reiniciar" ||
    text === "menu" ||
    text === "inicio" ||
    text === "hola"
  ) {
    sessions[userId] = { step: "idle" };

    return "Hola! Soy tu asistente virtual.\n\nPuedes escribir:\n- catalogo\n- bebidas\n- botanas";
  }

  // CANCELAR
  if (text === "cancelar") {
    sessions[userId] = { step: "idle" };

    return "Tu solicitud fue cancelada. Puedes escribir 'hola' para iniciar nuevamente.";
  }

  // CATALOGO (YA INTEGRADO AL FLUJO)
  if (text === "catalogo" || text === "productos") {
    session.step = "selecting_product";

    const productList = products
      .map((product) => `- ${product.name} ($${product.price})`)
      .join("\n");

    return `Este es nuestro catálogo disponible:\n${productList}\n\nEscribe el nombre exacto del producto que deseas.`;
  }

  // BEBIDAS
  if (text === "bebidas") {
    session.step = "selecting_product";

    const items = products
      .filter((product) => product.category === "bebidas")
      .map((product) => `- ${product.name} ($${product.price})`)
      .join("\n");

    return `Estas son nuestras bebidas disponibles:\n${items}\n\nEscribe el nombre del producto.`;
  }

  // BOTANAS
  if (text === "botanas" || text === "snacks") {
    session.step = "selecting_product";

    const items = products
      .filter(
        (product) =>
          product.category === "botanas" || product.category === "snacks"
      )
      .map((product) => `- ${product.name} ($${product.price})`)
      .join("\n");

    return `Estas son nuestras botanas disponibles:\n${items}\n\nEscribe el nombre del producto.`;
  }

  // SELECCIÓN DE PRODUCTO
  if (session.step === "selecting_product") {
    const product = products.find(
      (item) => normalizeText(item.name) === text
    );

    if (!product) {
      return "No encontré ese producto. Intenta nuevamente o escribe 'cancelar'.";
    }

    session.product = product.name;
    session.step = "selecting_quantity";

    return `Seleccionaste ${product.name}.\n¿Cuántas unidades deseas?`;
  }

  // SELECCIÓN DE CANTIDAD
  if (session.step === "selecting_quantity") {
    const quantity = Number(text);

    if (Number.isNaN(quantity) || quantity <= 0) {
      return "Ingresa una cantidad válida mayor a 0.";
    }

    session.quantity = quantity;
    session.step = "confirming_order";

    return `Vas a pedir ${quantity} x ${session.product}.\n\nEscribe 'confirmar' para finalizar o 'cancelar' para salir.`;
  }

  // CONFIRMAR PEDIDO
  if (session.step === "confirming_order") {
    if (text !== "confirmar") {
      return "Escribe 'confirmar' para registrar el pedido o 'cancelar' para salir.";
    }

    const product = products.find((item) => item.name === session.product);

    const total = (session.quantity || 0) * (product?.price || 0);

    const summary = `Pedido confirmado \n${session.quantity} x ${product?.name}\nTotal: $${total}`;

    sessions[userId] = { step: "idle" };

    return summary;
  }

  return "No entendí tu mensaje.\n\nEscribe 'hola' para iniciar o 'catalogo' para ver productos.";
};