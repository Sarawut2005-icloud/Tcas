import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Created with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "10px", background: "#f3f3f3" }}>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> |{" "}
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
        <footer style={{ padding: "10px", background: "#f3f3f3" }}>
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
