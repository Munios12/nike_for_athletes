import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";
import nikeLogo from "../../../public/swooshLogo.png";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={nikeLogo} alt={"nikeLogo"} className={styles.logo} />
      <h2>Nike Training Salesfloor</h2>
    </nav>
  );
};
