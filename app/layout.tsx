import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShoppinStore',
  description: 'go store, go shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
