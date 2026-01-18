export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "employee" | "customer";
  profile_image: string | null;
  address : string | null,
  created_at : string | null,
};
export type ProfileState = {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  login: (user: User | null, token: string | null) => void;
  logout: () => void;
};
