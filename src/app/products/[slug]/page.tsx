import React from 'react'
import styles from './page.module.css'
const SingleProductPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img src="/img53.jpg" alt="product" />
      </div>

      <div className={styles.description}>
        <h1>Product description</h1>
        <p>Specifications</p>
      </div>
    </main>
  )
}

export default SingleProductPage
