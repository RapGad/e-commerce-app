"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false)


  useEffect(()=>{
    setMounted(true)
  },[])
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <nav className={`${styles.navItems} ${showMenu ? styles.open: ''}`}>
        <ul className={styles.linkItems}>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className={styles.userInfo}>
          <Link href={"/cart"}>
            <ShoppingCart strokeWidth={1.2} size={25} />
          </Link>
          <Button className={styles.loginBtn}>Login</Button>
        </div>
      </nav>
      <button className={styles.menuIcon} onClick={()=>setShowMenu(prev=> !prev)}>
        {showMenu ? (
          <X />
        ) : (
          <Menu strokeWidth={1.2} size={25}  />
        )}
      </button>
    </header>
  );
};

export default Header;
