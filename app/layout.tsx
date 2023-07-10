import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";

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
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  )
}
