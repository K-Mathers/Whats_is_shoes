import api from "../api";
import { aiPath } from "./aiPath";
import type { IMessageData, ISessionType } from "./types";

export const newChatSession = async (sessionType: ISessionType) => {
  try {
    const response = await api.post(aiPath.SESSION, sessionType);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const messageToAi = async (messageData: IMessageData) => {
  try {
    const response = await api.post(aiPath.MESSAGE, messageData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const uploadImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  return api.post("/ai/upload", data);
};

export const getUserSessions = async () => {
  try {
    const response = await api.get(aiPath.GETSESSION);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSpecificSessionsDetail = async (id: string) => {
  try {
    const response = await api.get(`${aiPath.SESSION}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteSession = async (id: string) => {
  await api.delete(`${aiPath.SESSION}/${id}`);
};

export const renameSession = async (id: string, title: { title: string }) => {
  try {
    const response = await api.patch(`${aiPath.SESSION}/${id}`, title);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
