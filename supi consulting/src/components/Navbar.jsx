"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo">Supi<span>Consulting</span></Link>
                <div className="nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blog</Link>
                    <Link href="/#contact" className="btn btn-primary" style={{ color: 'black' }}>Book a Call</Link>
                </div>
            </div>
        </nav>
    );
}
