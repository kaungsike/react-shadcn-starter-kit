export type registerRequest = {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  role: "customer";
  passport_no : null | string;
  address: string;
};

export type registerResponse = {
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