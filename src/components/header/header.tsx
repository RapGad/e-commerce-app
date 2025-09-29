"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import { useTheme } from "next-themes";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false)

  const { theme }  = useTheme()
  


  useEffect(()=>{
    setMounted(true)
    console.log(theme)
  },[])
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <nav className={`${styles.navItems} ${showMenu ? styles.open: ''} ${theme === 'light' ? styles.whiteColor: styles.blackColor}`}>
        <ul className={styles.linkItems} >
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/about'}><li>About</li></Link>
          <Link href={'/contact'}><li>Contact</li></Link>
          <Link href={'/products'}><li>Products</li></Link>

        </ul>

        <div className={styles.userInfo}>
          <Link href={"/cart"}>
            <ShoppingCart strokeWidth={1.2} size={25} />
          </Link>
          <Link href={'/auth'}><Button className={styles.loginBtn}>Login</Button></Link>
          
          <ThemeToggle/>
        </div>
      </nav>
      <button className={styles.menuIcon} onClick={()=>setShowMenu(prev=> !prev)}>
        {showMenu ? (
          <X color={`${theme === 'light' ? 'white': 'black'}`} />
        ) : (
          <Menu strokeWidth={1.2} size={25}  />
        )}
      </button>
    </header>
  );
};

export default Header;
