"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { ComboBoxResponsive, Option } from "@/components/combobox/combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { allProducts } from "@/lib/db/data";
import { useCartStore } from "../../../store/cart-store";

const options = [
  { value: "category", label: "category" },
  { value: "condition", label: "condition" },
  { value: "type", label: "type" },
];

const ProductsPage = () => {
  const { addItem } = useCartStore();

  const [status, setStatus] = useState<Option | null>(null);
  return (
    <main className={styles.productsContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.sortContainer}>
          <ComboBoxResponsive
            options={options}
            value={status}
            onChange={setStatus}
            placeholder="Select Category"
          />
        </div>
        <div className={styles.categoryContainer}></div>
        <div className={styles.priceContainer}></div>
        <div className={styles.searchField}>
          <Input placeholder="search product..." />
          <Button>Search</Button>
        </div>
      </div>

      <div className={styles.allProducts}>
        {allProducts.map((product) => (
          <Card className={styles.cardContainer}>
            <Link key={product.id} href={`/products/${product.id}`}>
              <CardContent>
                <img style={{marginBottom: "1rem"}} src={product.image} alt={product.name} />
              </CardContent>
              <CardTitle style={{padding: '.3rem'}}>{product.name}</CardTitle>
              <CardDescription style={{padding: '.3rem', color: 'tomato'}}>{product.price}</CardDescription>
            </Link>
            <CardAction>
              <Button
                onClick={() =>
                  addItem({
                    id: product?.id,
                    name: product.name,
                    price: product.price,
                  })
                }
              >
                Add to Cart
              </Button>
            </CardAction>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
