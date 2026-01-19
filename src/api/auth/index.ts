import api from "../api";
import type {
  IChangePassData,
  IForgotPassData,
  ILoginData,
  IRegistartionData,
  IResetPassData,
  ISendCodeData,
  IVerifyCodeSend,
} from "./types";
import { userPath } from "./userPath";

export const getUser = async () => {
  try {
    const response = await api.get(userPath.PROFILE);
    return response.data;
  } catch (err) {
    throw err;
  }
};

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

export const forgotPassword = async (userData: IForgotPassData) => {
  try {
    await api.post(userPath.FORGOT_PASSWORD, userData);
  } catch (err) {
    throw err;
  }
};

export const resetPassword = async (userData: IResetPassData) => {
  try {
    await api.post(userPath.RESET_PASSWORD, userData);
  } catch (err) {
    throw err;
  }
};

export const changePassword = async (userData: IChangePassData) => {
  try {
    await api.post(userPath.CHANGE_PASSWORD, userData);
  } catch (err) {
    throw err;
  }
};

export const sendCode = async (userData: ISendCodeData) => {
  try {
    await api.post(userPath.SEND_CODE, userData);
  } catch (err) {
    throw err;
  }
};

export const verifyCode = async (userData: IVerifyCodeSend) => {
  try {
    await api.post(userPath.VERIFY_CODE, userData);
  } catch (err) {
    throw err;
  }
};
