import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProfileState, User } from "@/types/type";

export const useUserStore = create<ProfileState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),

      login: (user: User | null, token: string | null) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
      
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
