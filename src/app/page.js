'use client';

import Image from "next/image";
import styles from "./page.module.css";

import React from "react";
import DataTable from "./tables";


export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          DataProphet QA test
        </p>
        <div>
          <a
            href="dataprophet.abc"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/dplogo.webp"
              alt="Dataprophet"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <DataTable/>
      </div>

      <div className={styles.grid}>
       
      </div>
    </main>
  );
}
