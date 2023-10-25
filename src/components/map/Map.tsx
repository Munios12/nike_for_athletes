"use client";
import React, { createRef, useEffect, useRef, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import styles from "./Map.module.css";
import { IconButton } from "@mui/material";
import { BUTTONS_DATA } from "@/src/constants/buttonsData";
import { InfoCard } from "../infoCard/InfoCard";
import fourwayIMG from "../../../public/FW2.jpg";
import workhorstIMG from "../../../public/workhorst3.jpeg";
import single from "../../../public/singleMuro2.jpg";
import mannequin from "../../../public/mannequin.jpg";
import rounder from "../../../public/Rounder.jpg";

const Map = () => {
  const [openWindowFW, setOpenWindowFW] = useState(false);
  const [openWindowWH, setOpenWindowWH] = useState(false);
  const [openWindowSing, setOpenWindowSing] = useState(false);
  const [openWindowMannequin, setOpenWindowMannequin] = useState(false);
  const [openWindowRounder, setOpenWindowRounder] = useState(false);

  let fwRef: any = useRef();
  let whRef: any = useRef();
  let singRef: any = useRef();
  let manRef: any = useRef();
  let rounRef: any = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (!fwRef.current.contains(e.target)) {
        setOpenWindowFW(false);
      }

      if (!whRef.current.contains(e.target)) {
        setOpenWindowWH(false);
      }
      if (!singRef.current.contains(e.target)) {
        setOpenWindowSing(false);
      }
      if (!manRef.current.contains(e.target)) {
        setOpenWindowMannequin(false);
      }
      if (!rounRef.current.contains(e.target)) {
        setOpenWindowRounder(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

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
    } else if (item === "Rounder") {
      setOpenWindowFW(false);
      setOpenWindowWH(false);
      setOpenWindowSing(false);
      setOpenWindowMannequin(false);
      setOpenWindowRounder(!openWindowRounder);
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
          className={openWindowFW ? `${styles.fwshow}` : `${styles.hidden}`}
          img={fourwayIMG}
          reference={fwRef}
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
          className={openWindowWH ? `${styles.whshow}` : `${styles.hidden}`}
          img={workhorstIMG}
          reference={whRef}
        >
          <div className={styles.capacity}>
            <h5>Capacity</h5>
            <p>Camisetas: 15u en faceout, 12u en dbar</p>
            <p>Suaderas y chaquetas: 8u en dbar</p>
            <p>Pantalón: 12u</p>
          </div>
        </InfoCard>
        <InfoCard
          data={BUTTONS_DATA[2]}
          className={openWindowSing ? `${styles.singshow}` : `${styles.hidden}`}
          img={single}
          reference={singRef}
        />
        <InfoCard
          data={BUTTONS_DATA[3]}
          className={
            openWindowMannequin ? `${styles.mannequinshow}` : `${styles.hidden}`
          }
          img={mannequin}
          reference={manRef}
        />
        <InfoCard
          data={BUTTONS_DATA[4]}
          className={
            openWindowRounder ? `${styles.roundershow}` : `${styles.hidden}`
          }
          img={rounder}
          reference={rounRef}
        />
      </div>
    </main>
  );
};

export default Map;
