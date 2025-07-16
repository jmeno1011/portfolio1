export interface TechSkill {
  name: string
  category: string
  level: number // 1-5
  color: string
}

export interface PortfolioProject {
  Title: string;
  Period: string;
  Overview: string;
  MyNotes: string;
  TechStack: string[];
  images: string[];
}