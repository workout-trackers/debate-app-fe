import Link from 'next/link';
import styles from '@/styles/TopicCard.module.css';

import { Topic } from '@/interfaces';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Link href={`/boards/${topic.id}`}>
      <section className={styles.topicCard}>
        <h3>{topic.title}</h3>
      </section>
    </Link>
  );
}
