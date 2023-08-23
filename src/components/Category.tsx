import styles from '../styles/Category.module.css';

interface CategoryProps {
  id: number;
  topicId: number;
  title: string;
}

export default function Category({ category }: { category: CategoryProps }) {
  return (
    <article className={styles.category}>
      <h4>{category.title.toUpperCase()}</h4>
    </article>
  );
}
