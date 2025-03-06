import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link';

const NetflixFooterLinks_one = [
    {
        LinkText: "FAQ",
        LinkTo: "/"
    },
    {
        LinkText: "Speed Test",
        LinkTo: "/"
    },
    {
        LinkText: "Contact Us",
        LinkTo: "/"
    },
    {
        LinkText: "Jobs",
        LinkTo: "/"
    }
];
const NetflixFooterLinks_two = [
    {
        LinkText: "Cookie Preferences",
        LinkTo: "/"
    },
    {
        LinkText: "Privacy Policy",
        LinkTo: "/"
    },
    {
        LinkText: "Terms of Use",
        LinkTo: "/"
    },
    {
        LinkText: "Gift Card Terms",
        LinkTo: "/"
    }
];
const NetflixFooterLinks_three = [
    {
        LinkText: "Help Center",
        LinkTo: "/"
    },
    {
        LinkText: "Account",
        LinkTo: "/"
    },
    {
        LinkText: "Ways to Watch",
        LinkTo: "/"
    },
    {
        LinkText: "Only on Netflix",
        LinkTo: "/"
    }
];
const NetflixFooterLinks_four = [
    {
        LinkText: "Legal Notices",
        LinkTo: "/"
    },
    {
        LinkText: "Corporate Information",
        LinkTo: "/"
    },
    {
        LinkText: "Media Center",
        LinkTo: "/"
    },
    {
        LinkText: "Investor Relations",
        LinkTo: "/"
    }
];
const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <h6>Any Questions? Call: <span>+977 9812345678</span></h6>
        <div className={styles.FooterRow}>
            <div className={styles.FooterBox}>
                {NetflixFooterLinks_one.map(({LinkText, LinkTo}) => (
                    <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                ))}
            </div>
            <div className={styles.FooterBox}>
                {NetflixFooterLinks_two.map(({LinkText, LinkTo}) => (
                    <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                ))}
            </div>
            <div className={styles.FooterBox}>
                {NetflixFooterLinks_three.map(({LinkText, LinkTo}) => (
                    <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                ))}
            </div>
            <div className={styles.FooterBox}>
                {NetflixFooterLinks_four.map(({LinkText, LinkTo}) => (
                    <Link href={LinkTo} key={LinkText}>{LinkText}</Link>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
