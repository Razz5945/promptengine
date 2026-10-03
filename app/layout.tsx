import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptEngine — Build Better Prompts",
  description: "Turn simple ideas into structured, model-ready AI prompts.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
