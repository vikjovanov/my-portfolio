import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactNode } from 'react';

const maven_pro = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Viktor Jovanovic - Portfolio',
  description: 'My name is Viktor Jovanovic and this is my portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={maven_pro.className}>{children}</body>
    </html>
  );
}
