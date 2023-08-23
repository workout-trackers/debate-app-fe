import Link from "next/link";
import Layout from "@/layouts/layout";
import TopicCard from "@/components/TopicCard";
import styles from "@/styles/BoardsPage.module.css";

import users from "@/data/users.json";
import topics from "@/data/topics.json";

export default function BoardsPage() {
  return (
    <Layout user={users[0]}>
      <section className={styles.boardsPage}>
        <h2>All Boards</h2>
        {topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
      </section>
    </Layout>
  );
}
