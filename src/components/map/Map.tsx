"use client";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import styles from "./Map.module.css";
import { IconButton } from "@mui/material";
import { BUTTONS_DATA } from "@/src/constants/buttonsData";
import { InfoCard } from "../infoCard/InfoCard";
import fourwayIMG from "../../../public/FW2.jpg";
import workhorstIMG from "../../../public/workhorst2.jpg";
import single from "../../../public/singleMuro2.jpg";
import mannequin from "../../../public/mannequin.jpg";

const Map = () => {
  const [openWindowFW, setOpenWindowFW] = useState(false);
  const [openWindowWH, setOpenWindowWH] = useState(false);
  const [openWindowSing, setOpenWindowSing] = useState(false);
  const [openWindowMannequin, setOpenWindowMannequin] = useState(false);

  const buttonClassFW = openWindowFW ? `${styles.fwshow}` : `${styles.hidden}`;
  const buttonClassWH = openWindowWH ? `${styles.whshow}` : `${styles.hidden}`;
  const buttonClassSing = openWindowSing
    ? `${styles.singshow}`
    : `${styles.hidden}`;
  const buttonClassMannequin = openWindowMannequin
    ? `${styles.mannequinshow}`
    : `${styles.hidden}`;

  const showOpenWindow = (item: string) => {
    if (item === "Fourway") {
      setOpenWindowWH(false);
      setOpenWindowSing(false);
      setOpenWindowMannequin(false);
      setOpenWindowFW(!openWindowFW);
    } else if (item === "Workhorst") {
      setOpenWindowFW(false);
      setOpenWindowSing(false);
      setOpenWindowMannequin(false);
      setOpenWindowWH(!openWindowWH);
    } else if (item === "Single") {
      setOpenWindowFW(false);
      setOpenWindowWH(false);
      setOpenWindowMannequin(false);
      setOpenWindowSing(!openWindowSing);
    } else if (item === "MannequinSt") {
      setOpenWindowFW(false);
      setOpenWindowWH(false);
      setOpenWindowSing(false);
      setOpenWindowMannequin(!openWindowMannequin);
    }
  };

  return (
    <main className={styles.salesfloor_page}>
      <div className={styles.salesfloor_container}>
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
        >
          <div className={styles.capacity}>
            <h5>Capacity</h5>
            <p>Camisetas: 15u</p>
            <p>Suaderas y chaquetas: 8u</p>
            <p>Pantalón: 12u</p>
          </div>
        </InfoCard>
        <InfoCard
          data={BUTTONS_DATA[1]}
          className={buttonClassWH}
          img={workhorstIMG}
        >
          <h5>Capacity</h5>
        </InfoCard>
        <InfoCard
          data={BUTTONS_DATA[2]}
          className={buttonClassSing}
          img={single}
        >
          <h5>Capacity</h5>
        </InfoCard>
        <InfoCard
          data={BUTTONS_DATA[3]}
          className={buttonClassMannequin}
          img={mannequin}
        >
          <h5>Capacity</h5>
        </InfoCard>
      </div>
    </main>
  );
};

export default Map;
