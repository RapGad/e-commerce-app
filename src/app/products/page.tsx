import React from 'react'
import styles from './page.module.css'
import { ComboBoxResponsive } from '@/components/combobox/combobox'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <main className={styles.productsContainer}>
        <div className={styles.searchContainer}>
            <div className={styles.sortContainer}>
                <ComboBoxResponsive/>
            </div>
            <div className={styles.categoryContainer}>
                <ComboBoxResponsive/>
            </div>
            <div className={styles.priceContainer}>
                <ComboBoxResponsive/>
            </div>
            <div className={styles.searchField}>
                <Input placeholder='search product...'/>
                <Button>Search</Button>

            </div>
        </div>

        <div className={styles.allProducts}>
            <Link href={`/products/1`}>
                        <Card className={styles.cardContainer}>
                <CardContent>
                    <img src="/img55.jpg" alt="" />
                </CardContent>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Price</CardDescription>
                <CardAction>
                    <Button>Add to Cart</Button>
                </CardAction>
            </Card>
            </Link>

            <Card className={styles.cardContainer}>
                <CardContent>
                    <img src="/img55.jpg" alt="" />
                </CardContent>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Price</CardDescription>
                <CardAction>
                    <Button>Add to Cart</Button>
                </CardAction>
            </Card>
            <Card className={styles.cardContainer}>
                <CardContent>
                    <img src="/img55.jpg" alt="" />
                </CardContent>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Price</CardDescription>
                <CardAction>
                    <Button>Add to Cart</Button>
                </CardAction>
            </Card>
            <Card className={styles.cardContainer}>
                <CardContent>
                    <img src="/img55.jpg" alt="" />
                </CardContent>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Price</CardDescription>
                <CardAction>
                    <Button>Add to Cart</Button>
                </CardAction>
            </Card>
            <Card className={styles.cardContainer}>
                <CardContent>
                    <img src="/img55.jpg" alt="" />
                </CardContent>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Price</CardDescription>
                <CardAction>
                    <Button>Add to Cart</Button>
                </CardAction>
            </Card>
            <Card className={styles.cardContainer}>
                <CardContent>
                    <img src="/img55.jpg" alt="" />
                </CardContent>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Price</CardDescription>
                <CardAction>
                    <Button>Add to Cart</Button>
                </CardAction>
            </Card>
        </div>
      
    </main>
  )
}

export default ProductsPage
