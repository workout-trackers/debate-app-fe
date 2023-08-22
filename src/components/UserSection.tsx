import { useState } from 'react';
import styles from '@/styles/UserSection.module.css';

export default function UserSection() {
  const [userOpen, setUserOpen] = useState(false);

  return (
    <>
      <article
        className={`${styles.userSection} ${userOpen ? null : 'hidden'}`}
      ></article>
      <button
        className={styles.userButton}
        onClick={() => {
          userOpen ? setUserOpen(false) : setUserOpen(true);
        }}
      >
        8
      </button>
    </>
  );
}
