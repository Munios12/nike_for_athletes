import styles from "./page.module.css";
import Mapa from "../components/map/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>Nike Training Salesfloor</h3>
      <Mapa />
    </main>
  );
}
