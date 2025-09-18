import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "../ui/button";
import { Flame } from "lucide-react";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.topHeroContainer}>
        <div className={styles.topLeftHeroContainer}>
            <div className={styles.boxDesignerTop}></div>
            <div className={styles.imgContainerTop}>
                <Image className={styles.img} src="/img3.png" alt="hero" width={400} height={400}/>

            </div>
        </div>

        <div className={styles.topRightHeroContainer}>
            <div className={styles.textContainer}>
                <h1>Join Our <span>Ongoing Auction</span> Now!!!</h1> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <p>Pay Less Win Big</p>

            </div>
            <div className={styles.buttonContainer}>
            <Button className={styles.btn}> <Flame stroke="none" color="red" fill="currentColor" size={89} className={`${styles.animateFLicker} mr-2 h-4 w-4 text-orange-500`} /> Join now!!</Button>

            </div>
        </div>
      </div>
      <div className={styles.bottomHeroContainer}>
        <div className={styles.bottomLeftHeroContainer}>
          <div className={styles.cardDesign}></div>
          <div className={styles.cardDesign}></div>
          <div className={styles.cardDesign}></div>
          <div className={styles.cardDesign}></div>
          <div className={styles.cardDesign}></div>
            
        </div>
        <div className={styles.bottomRightHeroContainer}>
          <div className={styles.boxDesignerBottom}></div>
            <div className={styles.imgContainerBottom}>
                <Image className={styles.img} src="/img1.png" alt="hero" width={400} height={400}/>
            </div>

        </div>
        
      </div>
    </div>
  );
};

export default Hero;
