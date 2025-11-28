import { LoginFormValues, LoginResponse } from '../types/auth.types';

export const login = async (values: LoginFormValues): Promise<LoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    accessToken: 'mock-access-token',
    refreshToken: 'mock-refresh-token',
    user: {
      id: '1',
      name: 'Admin User',
      email: values.email,
    },
  };
};
