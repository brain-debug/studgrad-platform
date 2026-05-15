"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <nav className="navbar" style={{ position: 'relative', backgroundColor: 'var(--color-navy)' }}>
        <div className="container">
          <Link href="/" className="nav-brand" style={{ color: 'var(--color-white)' }}>
            Stud<span style={{ color: 'var(--color-teal)' }}>Grad</span>
          </Link>
          <div className="nav-links">
            <Link href="/" style={{ color: 'var(--color-white)' }}>Back to Home</Link>
          </div>
        </div>
      </nav>

      <section style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0', minHeight: 'calc(100vh - 100px)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-navy)', marginBottom: '2rem' }}>Privacy Policy</h1>
          
          <div style={{ color: 'var(--color-charcoal)', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.8 }}>
            <p><strong>Last Updated: May 2026</strong></p>
            <p>At StudGrad, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you engage with our community platform.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>1. Information We Collect</h3>
            <p>We may collect personal information such as your name, email address, university, and field of study when you subscribe to our newsletter, sign up for events, or contact our support team. We only collect what is strictly necessary to provide our services.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>2. How We Use Your Information</h3>
            <p>Your information is used strictly to provide you with the services you requested, including sending opportunity drops, event reminders, and responding to your inquiries. We do not sell, rent, or trade your personal data to third parties under any circumstances.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>3. Data Security</h3>
            <p>We implement appropriate technical and organizational security measures designed to protect your data against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>4. Your Rights</h3>
            <p>You have the right to access, update, or delete your personal information at any time. You can opt-out of our communications by clicking the "unsubscribe" link in any email we send, or by contacting us directly through our Support page.</p>
          </div>
        </div>
      </section>
    </>
  );
}
