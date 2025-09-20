import React from 'react'
import styles from './page.module.css'
import { CarouselSpacing } from '../carousel/carousel'

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredContainer}>
        <h1>
            Featured Products
        </h1>
        <CarouselSpacing/>

      
    </section>
  )
}

export default FeaturedProducts
