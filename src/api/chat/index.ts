import api from "../api";
import { chatPath } from "./chatPath";

export const initSupport = async () => {
  const response = await api.get(chatPath.CHATS);
  return response.data;
};
