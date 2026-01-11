import api from "../api";
import type { ILoginData, IRegistartionData } from "./types";
import { userPath } from "./userPath";

// export const getUser = async () => {
//     try {
//         const response = await api.get(userPath.)
//     }
// }

export const registrationUser = async (userData: IRegistartionData) => {
  try {
    const response = await api.post(userPath.REGISTRATION, userData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (userData: ILoginData) => {
  try {
    const response = await api.post(userPath.LOGIN, userData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const logoutUser = async () => {
  try {
    await api.post(userPath.LOGOUT, {});
  } catch (err) {
    throw err;
  }
};

// export const logoutUser = async () => {
//   try {
//     await api.post(userPath.LOGOUT, {}, { withCredentials: true });
//   } catch (err) {
//     throw err;
//   }
// };