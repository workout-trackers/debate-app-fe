import Layout from '@/layouts/layout';
import styles from '@/styles/Board.module.css';

import users from '../../data/users.json';

export default function Board() {
  return (
    <Layout user={users[0]}>
      <section className={styles.board}>
        <article className={styles.userA}>{/* User 1 */}</article>
        <section className={styles.topic}>{/* Topic */}</section>
        {/* Categories */}
        <article className={styles.userB}>{/* User 2 */}</article>
      </section>
    </Layout>
  );
}
