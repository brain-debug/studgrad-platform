import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="hero">
          <div className="glow-ball glow-1"></div>
          <div className="glow-ball glow-2"></div>
          <div className="container">
              <div className="hero-content reveal active">
                  <h1>Stop Building Other People&apos;s Economies. <br />Start Building Yours.</h1>
                  <p>Whether you’re an investor, entrepreneur, or professional ready to make the move, Supi Consulting equips you with the tools, knowledge, and connections to succeed.</p>
                  <Link href="#programs" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.15rem' }}>Enroll in the African Investor Course &rarr;</Link>
              </div>
          </div>
      </header>

      {/* Programs Section */}
      <section id="programs" className="section programs">
          <div className="container">
              <div className="section-header reveal active">
                  <h2 className="text-accent">Our Programs</h2>
                  <p>Structured journeys from analysis to your first African investment or business.</p>
              </div>
              
              <div className="programs-grid">
                  <div className="program-card reveal active">
                      <h3>Build Investor Mindset</h3>
                      <p>Start Here. Your first step into the Neo Panthers ecosystem. Understand Africa&apos;s investment landscape and your place in it.</p>
                      <Link href="#" className="card-link">Start Learning
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                  </div>
                  
                  <div className="program-card reveal active" style={{ transitionDelay: '0.1s', border: '2px solid var(--accent-primary)' }}>
                      <h3>African Investor Program</h3>
                      <p>For the diaspora investor. A structured 6-month journey from analysis to your first African investment.</p>
                      <Link href="#" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Buy the Course
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                  </div>
                  
                  <div className="program-card reveal active" style={{ transitionDelay: '0.2s' }}>
                      <h3>Builder Program</h3>
                      <p>For the diaspora entrepreneur. Build a business on the continent. Strategy, local market entry, partnerships, and community.</p>
                      <Link href="#" className="card-link">Enroll Now
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Founder Section */}
      <section className="section">
          <div className="container">
              <div className="founder-section reveal active">
                  <div className="founder-image-wrapper">
                      {/* Using regular img here to keep transition effects, or next/image */}
                      <img src="/images/founder_yodith_1777898013086.png" alt="Yodith - Founder of Supi Consulting" />
                  </div>
                  <div className="founder-content">
                      <h2 className="text-accent">Hi, I&apos;m Yodith</h2>
                      <p>I am Ethiopian Swiss. I went to Switzerland at a time when most people believed Africa was something to leave behind, not invest in. I built businesses. I worked in pharmaceuticals, in insurance. I spent years in the NGO world and in Human Rights ... sitting in rooms at the United Nations, watching diplomats discuss a continent they had never lived in.</p>
                      <p>And through all of it ... the same question kept coming back to me: why is it so easy for an Indian, a Lebanese, a Pakistani to go to Africa and build wealth ... but not for an African?</p>
                      <p>We go without preparation. We have never tried to build a business where we live, in a market we actually know, before jumping into a continent where the rules are different, the systems are unfamiliar, and one wrong move costs everything.</p>
                      <p>That is exactly what I built Supi Consulting to fix. I bring the perspective of someone who has seen Africa&apos;s reality up close, and who understands how global financial systems work. I put that entirely at the service of one thing: helping you invest in Africa safely, strategically, and with someone by your side who has already done the work.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Recent Blog */}
      <section className="section programs">
          <div className="container">
              <div className="section-header reveal active">
                  <h2 className="text-accent">From The Blog</h2>
                  <p>Insights and strategy for the African diaspora investor.</p>
              </div>
              
              <div className="blog-grid">
                  <div className="blog-card reveal active">
                      <div className="blog-image">
                          <img src="/images/blog_1_1777898243079.png" alt="African professional reviewing investment documents" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">May 1, 2026</div>
                          <h3>The African Diaspora and Investment Act Is Before the US Congress.</h3>
                          <p>Something passed through the US Congress in 2025 that did not make the front page of any diaspora publication I saw. The African Diaspora and Investment Act...</p>
                      </div>
                  </div>

                  <div className="blog-card reveal active" style={{ transitionDelay: '0.1s' }}>
                      <div className="blog-image">
                          <img src="/images/blog_2_1777898748416.png" alt="Confident African entrepreneur in modern office" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">April 24, 2026</div>
                          <h3>Five African Entrepreneurs Who Left Europe to Build on the Continent</h3>
                          <p>She left a senior role at a German logistics firm in 2019. Moved to Accra with two suitcases and a business plan she had been writing on weekends...</p>
                      </div>
                  </div>

                  <div className="blog-card reveal active" style={{ transitionDelay: '0.2s' }}>
                      <div className="blog-image">
                          <img src="/images/blog_3_1777898854422.png" alt="African business professionals at trade conference" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">April 17, 2026</div>
                          <h3>AfCFTA Is the Biggest Wealth Opportunity of Our Generation.</h3>
                          <p>A single market. 1.4 billion people. 54 countries. Combined GDP of $3.4 trillion. And tariffs being dismantled across the largest free trade area...</p>
                      </div>
                  </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal active">
                  <Link href="/blog" className="btn btn-secondary">Read All Articles</Link>
              </div>
          </div>
      </section>
    </main>
  );
}
