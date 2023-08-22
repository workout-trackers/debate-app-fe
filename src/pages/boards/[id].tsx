import Layout from '@/layouts/layout';
import styles from '@/styles/Board.module.css';

import users from '../../data/users.json';
import topics from '../../data/topics.json';
import usersTopics from '../../data/usersTopics.json';

export default function Board() {
  return (
    <Layout user={users[0]}>
      <section className={styles.board}>
        <article className={`${styles.userBoardBall} ${styles.userA}`}>
          <h4>{usersTopics[0].position}</h4>
        </article>
        <section className={styles.topic}>
          <h2>{topics[0].title}</h2>
          <p>{topics[0].description}</p>
        </section>
        {/* Categories */}
        <article className={`${styles.userBoardBall} ${styles.userB}`}>
          <h4>{usersTopics[1].position}</h4>
        </article>
      </section>
    </Layout>
  );
}
