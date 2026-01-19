export interface IRegistartionData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IForgotPassData {
  email: string;
}

export interface IResetPassData {
  email: string;
  code: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IChangePassData {
  currentPassword: string;
  newPassword: string;
}

export interface ISendCodeData {
  email: string;
}

export interface IVerifyCodeSend {
  email: string;
  code: string;
}
