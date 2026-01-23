export interface IFormData {
  email: string;
  role: string;
  createdAt: string;
  isVerified: string;
}

export interface IPasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
