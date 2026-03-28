import { Request, Response } from "express";
import { getChatbotResponse } from "../services/chatbot.service";
import { ChatRequestBody } from "../types/chatbot.types";

export const handleChatMessage = (
  req: Request<{}, {}, ChatRequestBody>,
  res: Response
): void => {
  const { message } = req.body;
  const userId = (req.headers["x-user-id"] as string) || "default-user";

  if (!message || typeof message !== "string") {
    res.status(400).json({
      success: false,
      message: "The field 'message' is required and must be a string."
    });
    return;
  }

  const botReply = getChatbotResponse(message, userId);

  res.status(200).json({
    success: true,
    userId,
    userMessage: message,
    botReply
  });
};