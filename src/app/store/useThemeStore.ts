import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = {
  theme: "light" | "dark"
  setTheme: (v: "light" | "dark") => void
}

export const useTheme = create<Theme>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (v) => set({ theme: v }),
    }),
    {
      name: "theme-storage",
    }
  )
)
