import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Buy whatever you want with a nice price"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
