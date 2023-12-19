import '@/app/global.css';
import type { Metadata } from 'next';
import React from 'react';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Captain Scope',
  description: 'Captain Scope is a chatbot that helps you with your HR questions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
