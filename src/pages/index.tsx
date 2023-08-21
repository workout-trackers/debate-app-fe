import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import InfoSection from '@/components/InfoSection';
import styles from '@/styles/Home.module.css';

import { User } from '@/interfaces';

import users from '../data/users.json';

export default function Home() {
  const [user, setUser] = useState<User>(users[0]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar user={user} />
        <section className={styles.loginSection}>
          <Link href="/signup" className={`${styles.ball} ${styles.ballOne}`}>
            <span className={styles.signupButtonText}>Signup</span>
          </Link>
          <Link href="/" className={`${styles.ball} ${styles.ballTwo}`}>
            0101010
          </Link>
          <Link href="/login" className={`${styles.ball} ${styles.ballThree}`}>
            <span className={styles.loginButtonText}>Login</span>
          </Link>
        </section>
        <InfoSection />
      </main>
    </>
  );
}