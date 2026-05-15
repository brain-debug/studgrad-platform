"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is StudGrad completely free?",
      answer: "Yes! Access to our community, weekly lives, and opportunity drops is 100% free for students and recent graduates."
    },
    {
      question: "Who can join StudGrad?",
      answer: "Anyone currently studying at university or who has recently graduated across tech, health, business, creative, law, and engineering."
    },
    {
      question: "How do I access the weekly live sessions?",
      answer: "We announce and host our weekly live sessions on our social platforms. Make sure to follow us on Instagram to get notified."
    },
    {
      question: "Can I share an opportunity with the community?",
      answer: "Absolutely! If you know of an internship or networking event, reach out to us via our Support page and we'll feature it."
    }
  ];

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
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="nav-brand">
            Stud<span>Grad</span>
          </a>
          <div className="nav-links desktop-only">
            <a href="/#about">About Us</a>
            <a href="/#features">Features</a>
            <a href="/#team">Community</a>
            <a href="/blog">Blog</a>
          </div>
          <a href="/join" className="btn btn-primary desktop-only" style={{ padding: '0.5rem 1.5rem' }}>Join Free</a>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>✕</button>
        <div className="nav-links">
          <a href="/#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="/#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="/#team" onClick={() => setIsMenuOpen(false)}>Community</a>
          <a href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="/join" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Join Free</a>
        </div>
      </div>

      {/* Hero Section Split */}
      <section className="hero-split">
        <div className="hero-left">
          <div className="animate-on-scroll">
            <h1>Where your network becomes your <span className="text-amber">net worth.</span></h1>
            <p>We've spent the last 5 years helping over 25,000+ students and graduates create and sustain successful careers across diverse fields.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '2.5rem', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/join" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', borderRadius: '50px', boxShadow: '0 10px 20px rgba(26,158,158,0.2)' }}>Join Now</a>
              <div className="play-button">
                <div className="play-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z"/>
                  </svg>
                </div>
                <span>Learn about us through this video</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper animate-on-scroll delay-200">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Students networking" />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="container">
          <div className="stats-grid animate-on-scroll">
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-number">2,000+</div>
                <div className="stat-label">Active Members</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">💼</div>
              <div className="stat-info">
                <div className="stat-number">500+</div>
                <div className="stat-label">Jobs Secured</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎙️</div>
              <div className="stat-info">
                <div className="stat-number">50+</div>
                <div className="stat-label">Weekly Lives</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🤝</div>
              <div className="stat-info">
                <div className="stat-number">100%</div>
                <div className="stat-label">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support / Features Section */}
      <section className="support-section" id="features">
        <div className="container">
          <div className="support-header animate-on-scroll">
            <h2>Empower Your Career</h2>
            <p className="text-muted">StudGrad provides the resources, network, and opportunities you need to turn your potential into tangible professional growth.</p>
          </div>
          <div className="image-grid animate-on-scroll delay-100">
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="Weekly Lives" />
              <div className="image-caption">
                <h3>Weekly Live Sessions</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Interactive discussions on career growth.</p>
              </div>
            </div>
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop" alt="Opportunity Drops" />
              <div className="image-caption">
                <h3>Opportunity Drops</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Fresh internships posted every Friday.</p>
              </div>
            </div>
            <div className="image-card">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Community Networking" />
              <div className="image-caption">
                <h3>Community Networking</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Connect directly with peers and mentors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" alt="Two diverse professionals smiling" />
            </div>
            <div className="about-content animate-on-scroll delay-100">
              <h2>About Us</h2>
              <p>StudGrad is a dedicated platform designed to bridge the gap between academic life and professional success. We connect students and recent graduates with mentors, opportunities, and a thriving community.</p>
              <p>Whether you're in tech, health, business, or the creative industries, we provide the resources you need. It’s more than networking; it’s about building a supportive ecosystem where talent is never wasted.</p>
              <a href="#" className="btn btn-primary" style={{ marginTop: '1rem' }}>Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Community Voices */}
      <section className="team-section" id="team">
        <div className="container">
          <h2 className="animate-on-scroll">Our Community</h2>
          <div className="team-grid">
            <div className="team-member animate-on-scroll">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Member" />
              </div>
              <h3>Sarah Jenkins</h3>
              <p>Recent Graduate - Tech</p>
            </div>
            <div className="team-member animate-on-scroll delay-100">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="Member" />
              </div>
              <h3>David Chen</h3>
              <p>University Student - Business</p>
            </div>
            <div className="team-member animate-on-scroll delay-200">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" alt="Member" />
              </div>
              <h3>Priya Patel</h3>
              <p>Recent Graduate - Health</p>
            </div>
            <div className="team-member animate-on-scroll delay-300">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" alt="Member" />
              </div>
              <h3>Marcus Johnson</h3>
              <p>University Student - Creative</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="animate-on-scroll" style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '3rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div className="faq-list animate-on-scroll delay-100">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}>
                <button className="faq-button" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-grid">
            <div className="testimonial-avatar animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" alt="Testimonial author" />
            </div>
            <div className="testimonial-content animate-on-scroll delay-100">
              <blockquote>"StudGrad completely changed my perspective on the job hunt. The weekly lives gave me insights I couldn't find anywhere else, and I landed my dream internship through their opportunity drops."</blockquote>
              <div className="testimonial-author">Maya Rahman</div>
              <div className="text-navy" style={{ opacity: 0.8 }}>Software Engineering Intern</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA & Footer */}
      <footer className="footer-cta" id="join">
        <div className="container">
          <div className="cta-flex animate-on-scroll">
            <h2>Let's Build Your Future With Our Community</h2>
            <a href="#" className="btn btn-amber">Join Free Now</a>
          </div>
          
          <div className="footer-grid animate-on-scroll delay-100">
            <div className="footer-col" style={{ gridColumn: 'span 1' }}>
              <h4>Newsletter</h4>
              <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Subscribe to our weekly opportunity drops.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#team">Community</a></li>
                <li><a href="#join">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Weekly Lives</a></li>
                <li><a href="#">Opportunity Drops</a></li>
                <li><a href="#">Career Carousels</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}>
            <span>© {new Date().getFullYear()} StudGrad. All rights reserved.</span>
            <span>Built for students, by the community.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
