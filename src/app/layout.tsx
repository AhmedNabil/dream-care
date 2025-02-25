import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { BottomNavBar } from "@/components/bottom-nav-bar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DreamCare AI Assistant',
  description: 'The DreamCare AI Assistant is a voice-based large language model that can help you with your daily tasks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ModeToggle />
            {children}
            <BottomNavBar />
          </ThemeProvider>
        </body>
      </html>
  )
}
