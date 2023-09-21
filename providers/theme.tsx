"use client";
"small change";

import { ThemeProvider } from "next-themes";

const ProvideThemes = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children} </ThemeProvider>;
};

export default ProvideThemes;
