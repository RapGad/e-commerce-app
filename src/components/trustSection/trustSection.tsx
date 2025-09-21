import React from "react";
import styles from "./page.module.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BadgeCheck, ShieldCheck, Truck, UserCheck2 } from "lucide-react";

const TrustSection = () => {
  return (
    <div className={styles.trustContainer}>
      <h1>Why Shop with Us</h1>
      <div className={styles.iconsContainer}>
        <Card className={styles.cardContainer}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <h2>Trust </h2>
              <BadgeCheck />
            </CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <ShieldCheck size={78} color="#2563eb" fill="#2563eb" stroke="white" strokeWidth={1.1}/>
 
            <p>100% secure payment between vendors and customer</p>

          </CardContent>
        </Card>
        <Card className={styles.cardContainer}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <h2>Trust </h2>
              <BadgeCheck />
            </CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <UserCheck2 size={78} strokeWidth={1.1} color="#2563eb" fill="#2563eb" stroke="white"/>
            <p>10k + customers registered with us and still counting</p>

          </CardContent>
        </Card>
        <Card className={styles.cardContainer}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <h2>Trust </h2>
              <BadgeCheck />
            </CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <Truck size={78} strokeWidth={1.0} color="#2563eb" fill="#2563eb" stroke="white"/>
            <p>You can get your ordered products within no time</p>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrustSection;
