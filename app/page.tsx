import styles from "./page.module.css";
import Map from "../src/components/map/Map";
import nikeLogo from "../public/swooshLogo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <Image src={nikeLogo} alt={"nikeLogo"} className={styles.logo} />
        <h2>Nike Training Salesfloor</h2>
      </nav>

      <Map />
    </main>
  );
}
