import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import ThemeRegistry from './ThemeRegistry';
import LayoutContent from './LayoutContent';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Home | Project NexTech",
  description: "Project NexTech is a student-led nonprofit organization dedicated to effective and free STEM education for all students powered by high school and college students from across southern California that currently works with the San Diego Branch Library system, the San Diego Bengali Association (Saikat), the Poway Unified School District",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeRegistry>
      </body>
    </html>
  );
}
