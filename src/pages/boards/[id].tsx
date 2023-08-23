import Layout from '@/layouts/layout';
import Category from '@/components/Category';

import styles from '@/styles/BoardPage.module.css';

import users from '../../data/users.json';
import topics from '../../data/topics.json';
import usersTopics from '../../data/usersTopics.json';
import categories from '../../data/categories.json';

export default function Board() {
  return (
    <Layout user={users[0]}>
      <section className={styles.boardPage}>
        <article className={`${styles.userBoardBall} ${styles.userA}`}>
          <h4>{usersTopics[0].position.toUpperCase()}</h4>
        </article>
        <section className={styles.board}>
          <section className={styles.topic}>
            <h2>{topics[0].title}</h2>
            <p>{topics[0].description}</p>
          </section>
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </section>
        <article className={`${styles.userBoardBall} ${styles.userB}`}>
          <h4>{usersTopics[1].position.toUpperCase()}</h4>
        </article>
      </section>
    </Layout>
  );
}
