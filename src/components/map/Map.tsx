"use client";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import styles from "../../../app/page.module.css";
import { IconButton } from "@mui/material";
import { BUTTONS_DATA } from "@/src/constants/buttonsData";
import { InfoCard } from "../infoCard/InfoCard";
import fourwayIMG from "../../../public/FW2.jpg";
import workhorstIMG from "../../../public/workhorst2.jpg";
import single from "../../../public/singleMuro2.jpg";

const Map = () => {
  const [openWindowFW, setOpenWindowFW] = useState(false);
  const [openWindowWH, setOpenWindowWH] = useState(false);
  const [openWindowSing, setOpenWindowSing] = useState(false);

  const buttonClassFW = openWindowFW ? `${styles.show}` : `${styles.hidden}`;
  const buttonClassWH = openWindowWH ? `${styles.show}` : `${styles.hidden}`;
  const buttonClassSing = openWindowSing
    ? `${styles.show}`
    : `${styles.hidden}`;

  const showOpenWindow = (item: string) => {
    if (item === "Fourway") {
      setOpenWindowWH(false);
      setOpenWindowSing(false);
      setOpenWindowFW(!openWindowFW);
    } else if (item === "Workhorst") {
      setOpenWindowFW(false);
      setOpenWindowSing(false);
      setOpenWindowWH(!openWindowWH);
    } else if (item === "Single") {
      setOpenWindowFW(false);
      setOpenWindowWH(false);
      setOpenWindowSing(!openWindowSing);
    }
  };

  return (
    <main className={styles.salesfloor_page}>
      <div className={styles.salesfloor_container}>
        <div className={styles.fourway}>
          {BUTTONS_DATA.map((buttonData) => {
            if (buttonData.title === "fourway") {
            }
            return (
              <div key={buttonData.title}>
                <IconButton
                  className={styles.button}
                  onClick={() => showOpenWindow(buttonData.title)}
                  style={{
                    position: "absolute",
                    top: buttonData.position.top,
                    left: buttonData.position.left,
                  }}
                >
                  <AddCircleIcon className={styles.icon} />
                </IconButton>
              </div>
            );
          })}

          <InfoCard
            data={BUTTONS_DATA[0]}
            className={buttonClassFW}
            img={fourwayIMG}
          />
          <InfoCard
            data={BUTTONS_DATA[1]}
            className={buttonClassWH}
            img={workhorstIMG}
          />
          <InfoCard
            data={BUTTONS_DATA[2]}
            className={buttonClassSing}
            img={single}
          />
        </div>
      </div>
    </main>
  );
};

export default Map;
