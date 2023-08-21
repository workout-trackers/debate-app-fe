import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import InfoSection from '@/components/InfoSection';
import styles from '@/styles/Home.module.css';

export default function Board() {
  return (
    <>
      <main className="main">
        <Header />
        <NavBar />
        <InfoSection />
      </main>
    </>
  );
}
