import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Kzyrell Dela Paz - Cloud Engineer Portfolio",
  description:
    "Portfolio of Kzyrell Dela Paz, a Computer Engineering student specializing in cloud infrastructure and software development.",
  keywords: ["Cloud Engineer", "Computer Engineering", "AWS", "Portfolio", "Software Development"],
  authors: [{ name: "Kzyrell Dela Paz" }],
  openGraph: {
    title: "Kzyrell Dela Paz - Cloud Engineer Portfolio",
    description:
      "Portfolio of Kzyrell Dela Paz, a Computer Engineering student specializing in cloud infrastructure and software development.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
