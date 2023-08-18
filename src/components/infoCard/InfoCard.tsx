import React from "react";
import Image from "next/image";
import styles from "../../../app/page.module.css";

export const InfoCard = ({
  data,
  className,
  img,
}: {
  data: any;
  className: any;
  img: any;
}) => {
  return (
    <>
      <div className={className} id={data.title}>
        <Image
          src={img}
          alt={data.title}
          // width={200}
          // height={200}
          className={styles.fwimg}
        />
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </div>
    </>
  );
};
