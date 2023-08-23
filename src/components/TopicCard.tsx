import Link from 'next/link';
import styles from '@/styles/TopicCard.module.css';

interface TopicProps {
  id: number;
  title: string;
  description: string;
}

export default function TopicCard({ topic }: { topic: TopicProps }) {
  return (
    <Link href={`/boards/${topic.id}`}>
      <section key={topic.id} className={styles.topicCard}>
        <h3>{topic.title}</h3>
      </section>
    </Link>
  );
}