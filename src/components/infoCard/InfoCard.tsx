import React from "react";
import Image from "next/image";
import styles from "../../../app/page.module.css";

export const InfoCard = ({
  data,
  className,
  img,
  children,
  reference,
}: {
  data: any;
  className: any;
  img: any;
  children?: JSX.Element;
  reference?: any;
}) => {
  return (
    <div className={className} id={data.title} ref={reference}>
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
