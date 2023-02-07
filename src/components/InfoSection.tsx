import { useState } from 'react';
import styles from '@/styles/InfoSection.module.css';

export default function InfoSection() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <article
        className={`${styles.infoSection} ${infoOpen ? null : 'hidden'}`}
      >
        <p>
          This app helps facilitate debates by allowing you to create and view
          boards around a central topic as well as sub-topics.
        </p>
        <p>
          Each side of the debate is able to state their position and provide
          agruments and references for each sub-topic
        </p>
      </article>
      <button
        className={styles.infoButton}
        onClick={() => {
          infoOpen ? setInfoOpen(false) : setInfoOpen(true);
        }}
      >
        i
      </button>
    </>
  );
}
