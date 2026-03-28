export interface Session {
  step: "idle" | "selecting_product" | "selecting_quantity" | "confirming_order";
  product?: string;
  quantity?: number;
}

export const sessions: Record<string, Session> = {};