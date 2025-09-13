import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Poppins as FontHeading } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = FontHeading({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'VotixCare - Eye Care Management System',
  description: 'Admin dashboard for VotixCare eye care management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
