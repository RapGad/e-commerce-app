"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "./header/header";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>
    {children}
    </NextThemesProvider>;
}
