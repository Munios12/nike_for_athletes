import styles from "./page.module.css";
import Map from "../src/components/map/Map";
import { NavBar } from "@/src/components/navbar/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Map />
    </main>
  );
}
