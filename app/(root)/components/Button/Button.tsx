import Link from 'next/link'
import React from 'react'
import styles from './Button.module.css'

interface ButtonProps{
    LinkText: string,
    LinkTo: string
}
const Button:React.FC<ButtonProps> = ({LinkText, LinkTo}) => {
  return (
    <>
     <Link href={LinkTo} className={styles.Button}>{LinkText}</Link>
    </>
  )
}

export default Button
