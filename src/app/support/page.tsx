"use client";

import Link from "next/link";

export default function Support() {
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

      <section style={{ backgroundColor: 'var(--color-cream)', padding: '6rem 0', minHeight: 'calc(100vh - 100px)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Support</h1>
          <p style={{ color: 'var(--color-muted)', marginBottom: '3rem', fontSize: '1.125rem' }}>Need help? Have an opportunity to share? Fill out the form below and our community team will get back to you as soon as possible.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--color-white)', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Full Name</label>
              <input type="text" id="name" placeholder="John Doe" style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>How can we help?</label>
              <textarea id="message" rows={6} placeholder="Type your message here..." style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            </div>
            <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
