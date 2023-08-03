import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Azikulov',
  description: '',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='kk'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
