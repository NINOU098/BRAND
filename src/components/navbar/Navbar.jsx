'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    src="/logo2.jpg" 
                    alt="Logo"
                    width={120}
                    height={120}
                />
            </div>
            <div className={styles.navContent}>
                <ul className={open ? styles.navListOpen : styles.navList}>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/OneChampionship">ONE Championship</Link></li>
                    <li><Link href="/ufc">UFC</Link></li>
                    <li><Link href="/events">evenements</Link></li>
                    <li><Link href="/contact">contact</Link></li>
                    
                </ul>
                <ToggleTheme />
            </div>
            <MenuIcon
                fontSize="large"
                className={styles.menuButton}
                onClick={() => setOpen(!open)}
            />
        </nav>
    );
}
