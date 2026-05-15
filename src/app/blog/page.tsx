"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="animate-on-scroll" style={{ fontSize: '3.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Our Blog</h1>
            <p className="animate-on-scroll delay-100" style={{ color: 'var(--color-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>Insights, career advice, and success stories from the StudGrad community.</p>
          </div>
          
          <div className="blog-grid">
            <div className="blog-card animate-on-scroll">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Networking" />
              </div>
              <div className="blog-content">
                <div className="blog-date">May 12, 2026</div>
                <h3 className="blog-title">How to Network Authentically</h3>
                <p className="blog-excerpt">Networking doesn't have to feel transactional. Learn how to build genuine connections that lead to long-term career growth.</p>
                <a href="#" className="blog-readmore">Read Article →</a>
              </div>
            </div>

            <div className="blog-card animate-on-scroll delay-100">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" alt="Interview Prep" />
              </div>
              <div className="blog-content">
                <div className="blog-date">May 05, 2026</div>
                <h3 className="blog-title">Acing Your First Technical Interview</h3>
                <p className="blog-excerpt">We sat down with recruiters from top tech companies to find out exactly what they look for in graduate candidates.</p>
                <a href="#" className="blog-readmore">Read Article →</a>
              </div>
            </div>

            <div className="blog-card animate-on-scroll delay-200">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" alt="Work Life Balance" />
              </div>
              <div className="blog-content">
                <div className="blog-date">April 28, 2026</div>
                <h3 className="blog-title">Navigating Burnout as a Student</h3>
                <p className="blog-excerpt">Balancing academics with internship hunting can be exhausting. Here are 5 practical ways to protect your mental health.</p>
                <a href="#" className="blog-readmore">Read Article →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
