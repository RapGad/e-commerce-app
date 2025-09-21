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
                <h1>Shop and Win<span> The Future Of E-commerce</span> in Ghana</h1> 
                <p>Buy directly from local stores or join exciting skill-based auction to win big</p>

            </div>
            <div className={styles.buttonContainer}>
            <Button className={styles.btn}> <Flame stroke="none" color="red" fill="currentColor" size={89} className={`${styles.animateFLicker} mr-2 h-4 w-4 text-orange-500`} /> Join now!!</Button>

            </div>
        </div>
      </div>
      <div className={styles.bottomHeroContainer}>
        <div className={styles.bottomLeftHeroContainer}>
          <div className={styles.cardDesign}>
            <Image className={styles.cardImage}  width={500} height={500} src={'/img55.jpg'} alt="image"/>
          </div>
          <div className={styles.cardDesign}>
                        <Image className={styles.cardImage} width={500} height={500} src={'/img54.jpg'} alt="image"/>

          </div>
          <div className={styles.cardDesign}>
                        <Image  className={styles.cardImage} width={500} height={500} src={'/img53.jpg'} alt="image"/>

          </div>
          <div className={styles.cardDesign}>
                        <Image className={styles.cardImage}  width={500} height={500} src={'/img52.jpg'} alt="image"/>

          </div>
          <div className={styles.cardDesign}>
                        <Image className={styles.cardImage}  width={500} height={500} src={'/img51.jpg'} alt="image"/>

          </div>
            
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
