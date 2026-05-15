"use client";

import Link from "next/link";

export default function Terms() {
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
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-navy)', marginBottom: '2rem' }}>Terms & Conditions</h1>
          
          <div style={{ color: 'var(--color-charcoal)', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.8 }}>
            <p><strong>Last Updated: May 2026</strong></p>
            <p>Welcome to StudGrad. By accessing or using our platform, community events, and resources, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>1. Community Guidelines</h3>
            <p>StudGrad is a supportive and inclusive community. Harassment, discrimination, spamming, or self-promotion without prior consent will result in immediate removal from our platform and events. We strive to maintain a safe, welcoming space for all students and graduates.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>2. Opportunities and Links</h3>
            <p>We curate external internship and job opportunities ("Opportunity Drops"). We do not guarantee the validity, availability, or success of any external opportunity. We are not responsible for third-party content or any outcomes resulting from engaging with those links.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>3. Intellectual Property</h3>
            <p>All content created by StudGrad, including text, graphics, logos, and materials from our live sessions, is our property and protected by intellectual property laws. You may not reproduce, repurpose, or distribute this without explicit permission from our team.</p>
            
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginTop: '1rem' }}>4. Modifications to Service</h3>
            <p>We reserve the right to modify or discontinue, temporarily or permanently, any part of our platform with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.</p>
          </div>
        </div>
      </section>
    </>
  );
}
