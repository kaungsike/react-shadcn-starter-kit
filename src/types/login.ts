export type loginRequest = {
  email: string;
  password: string;
};

export type loginResponse = {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    profile_image: string | null;
    createdAt: string;
    updatedAt: string;
  };
};
