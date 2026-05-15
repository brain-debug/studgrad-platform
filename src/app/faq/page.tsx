"use client";

import Link from "next/link";

export default function FAQ() {
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
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-navy)', marginBottom: '2rem' }}>Frequently Asked Questions</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Is StudGrad completely free?</h3>
              <p style={{ color: 'var(--color-muted)' }}>Yes! Access to our community, weekly lives, and opportunity drops is 100% free for students and recent graduates.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Who can join StudGrad?</h3>
              <p style={{ color: 'var(--color-muted)' }}>Anyone currently studying at university or who has recently graduated. We cater primarily to tech, health, business, creative industries, law, and engineering.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>How do I access the weekly live sessions?</h3>
              <p style={{ color: 'var(--color-muted)' }}>We announce and host our weekly live sessions on our social platforms. Make sure to follow us on Instagram to get notified when we go live.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Can I share an opportunity with the community?</h3>
              <p style={{ color: 'var(--color-muted)' }}>Absolutely! If you know of an internship, graduate role, or networking event, reach out to us via our Support page and we'll feature it in our next Friday drop.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
