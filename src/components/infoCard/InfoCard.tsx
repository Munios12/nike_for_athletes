import React from "react";
import Image from "next/image";
import styles from "../../../app/page.module.css";

export const InfoCard = ({
  data,
  className,
  img,
  children,
}: {
  data: any;
  className: any;
  img: any;
  children?: JSX.Element;
}) => {
  return (
    <div className={className} id={data.title}>
      <Image src={img} alt={data.title} className={styles.fwimg} />
      <div className={styles.infoCardText}>
        <h5>{data.title}</h5>
        <div className={styles.centerText}>
          <p>{data.description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
