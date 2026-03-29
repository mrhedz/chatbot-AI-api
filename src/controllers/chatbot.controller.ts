import { Request, Response } from "express";
import { getAIResponse } from "../services/ai.service";

const getSuggestedReplies = (message: string): string[] => {
  const text = message.toLowerCase();

  if (
    text.includes("bebida") ||
    text.includes("tomar") ||
    text.includes("refresco") ||
    text.includes("jugo")
  ) {
    return [
      "Quiero algo sin azúcar",
      "Muéstrame opciones refrescantes",
      "Busco algo económico",
    ];
  }

  if (
    text.includes("snack") ||
    text.includes("botana") ||
    text.includes("comer")
  ) {
    return [
      "Quiero algo salado",
      "Recomiéndame algo ligero",
      "Muéstrame opciones económicas",
    ];
  }

  if (
    text.includes("recomienda") ||
    text.includes("recomend") ||
    text.includes("opciones")
  ) {
    return [
      "Quiero una bebida refrescante",
      "Muéstrame snacks",
      "Busco algo premium",
    ];
  }

  return [
    "Quiero una bebida refrescante",
    "Muéstrame snacks",
    "¿Qué me recomiendas?",
  ];
};

export const chatController = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: "Message is required and must be a string",
      });
    }

    const aiReply = await getAIResponse(message);
    const suggestedReplies = getSuggestedReplies(message);

    return res.status(200).json({
      success: true,
      botReply: aiReply,
      suggestedReplies,
    });
  } catch (error) {
    console.error("Error in chatController:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      botReply:
        "Ocurrió un problema al generar la respuesta. Intenta nuevamente en unos segundos.",
      suggestedReplies: [
        "Quiero una bebida refrescante",
        "Muéstrame snacks",
        "Busco algo económico",
      ],
    });
  }
};