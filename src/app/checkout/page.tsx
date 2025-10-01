"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore } from "../../../store/cart-store";
import { Button } from "@/components/ui/button";



const CheckOut = () => {
  const [activeTab, setActiveTab] = useState("personal");

const { cart,removeItem,increaseQuantity,decreaseQuantity } = useCartStore()

  return (
    <main className={styles.checkOutContainer}>
      <h1>Cart Summary</h1>

      <Table>
        <TableCaption>Order summary</TableCaption>
        <TableHeader>
          <TableRow>

            <TableHead>Name</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead className="text-right">Price</TableHead>


          </TableRow>
        </TableHeader>
        <TableBody>
          {
            cart.length === 0 ? <p>No Items available</p>:
          
          cart.map((product) => (
            <TableRow key={product.id}>

              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="text-right">
                <Button onClick={() => product.quantity === 1 ? removeItem(product.id):  decreaseQuantity(product.id)}>{product.quantity === 1 ? 'Remove item': 'Decrease'}</Button>
              </TableCell>
              <TableCell className="text-right">
                <Button onClick={()=> increaseQuantity(product.id)}>Increase</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {cart
                .reduce((acc, prev) => acc + prev.price * prev.quantity, 0)
                .toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <h1> Order Details</h1>

      <div className="flex justify-center items-center min-h-[80vh] m-2">
        <div className="w-full max-w-md p-5 bg-card rounded-lg shadow-sm border">
          <h1 className="text-2xl font-bold text-center mb-6">Order Info</h1>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-4 w-full ">
              <TabsTrigger value="personal">Personal Details</TabsTrigger>
              <TabsTrigger value="payment">Payment Details</TabsTrigger>
              <TabsTrigger value="confirm">Confirm Order</TabsTrigger>
            </TabsList>
              <TabsContent value="personal">Personal details</TabsContent>
              <TabsContent value="payment">Payment details</TabsContent>
              <TabsContent value="confirm">Confirm Order</TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
