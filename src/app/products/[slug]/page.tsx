import React from 'react'
import styles from './page.module.css'
import { allProducts } from '@/lib/db/data'
import { Button } from '@/components/ui/button'
const SingleProductPage = async({ params } : { params: Promise<{slug: string}>}) => {

  const { slug } = await params

  const product = allProducts.find(product=> product.id === parseInt(slug))
  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img src={product?.image} alt={product?.name} />
      </div>

      <div className={styles.description}>
        <h1>{product?.name}</h1>
        <h2>{product?.description}</h2>
        <p>{product?.content}</p>
        <p className={styles.price}>GHC {product?.price}</p>
        <Button>Add to Cart</Button>
      </div>
    </main>
  )
}

export default SingleProductPage
