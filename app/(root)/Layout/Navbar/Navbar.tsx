import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Button  from '@/app/(root)/components/Button/Button';
const Navbar = () => {
  return (
    <nav className={styles.NavbarMain}>
      <Link href={"/"}>
        <img src='/assets/logo.png'/>
      </Link>

      <div className={styles.Btnbox}>
        <Button LinkText='Sign In' LinkTo='/Pages/SignIn'/>
      </div>
    </nav>
  )
}

export default Navbar
