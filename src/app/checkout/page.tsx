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

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/150?text=Headphones",
    quantity: 1,
    price: 59.99,
  },
  {
    id: 2,
    name: "Smartphone Case",
    image: "https://via.placeholder.com/150?text=Phone+Case",
    quantity: 2,
    price: 15.49,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: "https://via.placeholder.com/150?text=Mouse",
    quantity: 1,
    price: 39.95,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    image: "https://via.placeholder.com/150?text=Speaker",
    quantity: 1,
    price: 89.0,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    image: "https://via.placeholder.com/150?text=Keyboard",
    quantity: 1,
    price: 129.99,
  },
  {
    id: 6,
    name: "Smart Watch",
    image: "https://via.placeholder.com/150?text=Smart+Watch",
    quantity: 1,
    price: 199.99,
  },
  {
    id: 7,
    name: "Laptop Stand",
    image: "https://via.placeholder.com/150?text=Laptop+Stand",
    quantity: 1,
    price: 34.5,
  },
  {
    id: 8,
    name: "USB-C Charger",
    image: "https://via.placeholder.com/150?text=Charger",
    quantity: 3,
    price: 24.99,
  },
  {
    id: 9,
    name: "Portable SSD 1TB",
    image: "https://via.placeholder.com/150?text=SSD",
    quantity: 1,
    price: 149.0,
  },
  {
    id: 10,
    name: "Noise Cancelling Earbuds",
    image: "https://via.placeholder.com/150?text=Earbuds",
    quantity: 2,
    price: 89.99,
  },
  {
    id: 11,
    name: "4K Monitor",
    image: "https://via.placeholder.com/150?text=Monitor",
    quantity: 1,
    price: 349.0,
  },
  {
    id: 12,
    name: "Wireless Keyboard + Mouse Combo",
    image: "https://via.placeholder.com/150?text=Combo",
    quantity: 1,
    price: 59.0,
  },
  {
    id: 13,
    name: "Smart Home Hub",
    image: "https://via.placeholder.com/150?text=Home+Hub",
    quantity: 1,
    price: 129.0,
  },
  {
    id: 14,
    name: "Action Camera",
    image: "https://via.placeholder.com/150?text=Camera",
    quantity: 1,
    price: 249.99,
  },
  {
    id: 15,
    name: "VR Headset",
    image: "https://via.placeholder.com/150?text=VR+Headset",
    quantity: 1,
    price: 399.99,
  },
];

const CheckOut = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <main className={styles.checkOutContainer}>
      <h1>Cart Summary</h1>

      <Table>
        <TableCaption>Order summary</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <img src={product.image} alt={product.name} />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {products
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
