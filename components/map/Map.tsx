"use client";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Image from "next/image";
import styles from "../../app/page.module.css";
import { IconButton } from "@mui/material";
import fourway from "../../public/WhatsApp Image 2023-06-01 at 23.03.56.jpeg";

const Map = () => {
  // const muebles = ["fourway", "workhorse", "single"];

  const [openWindow, setOpenWindow] = useState(false);
  const buttonClass = openWindow ? `${styles.show}` : `${styles.hidden}`;

  const showOpenWindow = () => {
    setOpenWindow(!openWindow);
  };

  return (
    <main className={styles.salesfloor_page}>
      <div className={styles.prueba_img}>
        <div className={styles.fourway}>
          <IconButton className={styles.button} onClick={showOpenWindow}>
            <AddCircleIcon className={styles.icon} />
          </IconButton>
          <div className={buttonClass} id="fourway">
            <Image src={fourway} alt="fourway" className={styles.fwimg} />
            <h5>Fourway</h5>
            <p>
              Tiene forma de cruz y podemos representar diferentes outfits,
              tanto camisetas con pantalones como tops deportivos y shorts en el
              caso de WMNS
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.workhorse}>
        <IconButton className={styles.button}>
          <AddCircleIcon className={styles.icon} />
        </IconButton>
      </div>

      <div className={styles.single}>
        <IconButton className={styles.button}>
          <AddCircleIcon className={styles.icon} />
        </IconButton>
      </div> */}
    </main>
  );
};

export default Map;
