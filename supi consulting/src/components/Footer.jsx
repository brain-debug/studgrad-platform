import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'block' }}>Supi<span>Consulting</span></Link>
                        <p className="footer-address">
                            Unity Building<br/>
                            The Precinct M2 Junction<br/>
                            B11 Fond du Sac Road<br/>
                            Grand Baie<br/>
                            Mauritius
                        </p>
                        <p className="footer-address" style={{ marginTop: '1rem' }}>
                            Email: info@supi-consulting.com
                        </p>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/#contact">Book a Call</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Stay Updated</h4>
                        <form className="newsletter-form">
                            <div className="input-group">
                                <input type="text" placeholder="Name (required)" required />
                            </div>
                            <div className="input-group">
                                <input type="email" placeholder="Email (required)" required />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Subscribe</button>
                            <p className="newsletter-terms">By submitting your information, you're giving us permission to email you. You may unsubscribe at any time.</p>
                        </form>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    &copy; Copyright Supi Consulting 2026. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
