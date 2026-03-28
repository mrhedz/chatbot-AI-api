import { Router } from "express";
import { handleChatMessage } from "../controllers/chatbot.controller";

const router = Router();

router.post("/chat", handleChatMessage);

export default router;