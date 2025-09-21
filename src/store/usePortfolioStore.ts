import { create } from "zustand";

export type Portfolio = {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  talent: string;
  reason: string;
  major: string;
  university: string;
  photo?: string;
  activities?: string[];
  awards?: string[];
  works?: string[];
};

export type PortfolioState = {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Portfolio) => void;
  getPortfolioById: (id: string) => Portfolio | undefined;
};

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  portfolios: [],
  addPortfolio: (portfolio) =>
    set((state) => ({
      portfolios: [...state.portfolios, portfolio],
    })),
  getPortfolioById: (id) => get().portfolios.find((p) => p.id === id),
}));
