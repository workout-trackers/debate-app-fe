import Header from '@/components/Header';
import NavBar from '@/components/NavBar/NavBar';
import UserSection from '@/components/UserSection';
import InfoSection from '@/components/InfoSection';
import { ReactNode } from 'react';
import { User } from '@/interfaces';

interface LayoutProps {
  user?: User;
  children: ReactNode;
}

export default function Layout({ user, children }: LayoutProps) {
  return (
    <main className="main">
      <Header />
      <NavBar />
      {children}
      {user ? <UserSection /> : <InfoSection />}
    </main>
  );
}
