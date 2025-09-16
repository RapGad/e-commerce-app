import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.imageContainer}>
            <span style={{"--i": 1 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 2 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 3 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 4 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 5 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 6 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 7 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>
            <span style={{"--i": 8 }as React.CSSProperties}>
                <Image className={styles.img} width={1000} height={1000} src="https://images.unsplash.com/photo-1757416654883-c73c67b3382b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
            </span>

        </div>

        <div className={styles.auction}>

        </div>
      
    </div>
  )
}

export default Hero
