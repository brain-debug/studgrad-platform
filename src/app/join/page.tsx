"use client";

import Link from "next/link";
import { useState } from "react";

export default function Join() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <nav className="navbar" style={{ position: 'relative', backgroundColor: 'var(--color-navy)' }}>
        <div className="container">
          <Link href="/" className="nav-brand" style={{ color: 'var(--color-white)' }}>
            Stud<span style={{ color: 'var(--color-teal)' }}>Grad</span>
          </Link>
          <div className="nav-links desktop-only">
            <Link href="/" style={{ color: 'var(--color-white)' }}>Back to Home</Link>
          </div>
        </div>
      </nav>

      <section style={{ backgroundColor: 'var(--color-cream)', padding: '4rem 0', minHeight: 'calc(100vh - 100px)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          
          {!isSubmitted ? (
            <div style={{ backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1rem', textAlign: 'center' }}>Join StudGrad</h1>
              <p style={{ color: 'var(--color-muted)', marginBottom: '2.5rem', textAlign: 'center' }}>Tell us a bit about yourself so we can tailor the best resources and opportunities for your journey.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Personal Info */}
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="firstName" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>First Name</label>
                    <input type="text" id="firstName" required placeholder="Jane" style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="lastName" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Last Name</label>
                    <input type="text" id="lastName" required placeholder="Doe" style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Email Address</label>
                  <input type="email" id="email" required placeholder="jane@university.edu" style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />
                </div>

                <div style={{ height: '1px', backgroundColor: '#eee', margin: '1rem 0' }}></div>

                {/* Questionnaire */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Which best describes you?</label>
                  <select required style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', backgroundColor: 'white' }}>
                    <option value="">Select an option...</option>
                    <option value="student">Current University Student</option>
                    <option value="graduate">Recent Graduate (1-3 years)</option>
                    <option value="alumni">Experienced Professional / Alumni</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: 'var(--color-navy)' }}>What is your primary field of interest?</label>
                  <select required style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', backgroundColor: 'white' }}>
                    <option value="">Select a field...</option>
                    <option value="tech">Technology & Software</option>
                    <option value="health">Healthcare & Medicine</option>
                    <option value="business">Business & Finance</option>
                    <option value="creative">Creative Industries & Design</option>
                    <option value="law">Law & Legal Services</option>
                    <option value="engineering">Engineering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="motivation" style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Why do you want to join StudGrad?</label>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '-0.25rem', marginBottom: '0.25rem' }}>Are you looking for mentorship, job opportunities, or just a community?</p>
                  <textarea id="motivation" required rows={4} placeholder="I want to connect with peers and find opportunities in..." style={{ padding: '0.875rem', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.125rem', width: '100%', marginTop: '1rem' }}>Submit Application</button>
              </form>
            </div>
          ) : (
            <div style={{ backgroundColor: 'var(--color-white)', padding: '4rem 2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Welcome to the Community!</h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', marginBottom: '2rem' }}>Thank you for filling out the questionnaire. We'll be in touch soon with your personalized onboarding resources.</p>
              <Link href="/" className="btn btn-primary">Return to Homepage</Link>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
