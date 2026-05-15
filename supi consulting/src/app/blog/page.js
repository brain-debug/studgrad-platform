import Link from 'next/link';

export const metadata = {
  title: 'Blog | Supi Consulting',
  description: "Insights and strategy for the African diaspora investor.",
};

export default function Blog() {
  return (
    <main>
      {/* Header */}
      <header className="page-header">
          <div className="container reveal active">
              <h1 className="text-gold">Our Blog</h1>
              <p>Strategy, insights, and analysis for building wealth in Africa.</p>
          </div>
      </header>

      {/* Main Content */}
      <section className="section">
          <div className="container">
              <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                  
                  <div className="blog-card reveal active">
                      <div className="blog-image">
                          <img src="/images/blog_1_1777898243079.png" alt="African professional reviewing investment documents" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">May 1, 2026</div>
                          <h3>The African Diaspora and Investment Act Is Before the US Congress. What It Means for You.</h3>
                          <p>Something passed through the US Congress in 2025 that did not make the front page of any diaspora publication I saw. The African Diaspora and Investment Act. For the first…</p>
                          <Link href="#" className="card-link" style={{ marginTop: '1rem' }}>Read Article</Link>
                      </div>
                  </div>

                  <div className="blog-card reveal active" style={{ transitionDelay: '0.1s' }}>
                      <div className="blog-image">
                          <img src="/images/blog_2_1777898748416.png" alt="Confident African entrepreneur in modern office" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">April 24, 2026</div>
                          <h3>Five African Entrepreneurs Who Left Europe to Build on the Continent — and Never Looked Back</h3>
                          <p>She left a senior role at a German logistics firm in 2019. Moved to Accra with two suitcases and a business plan she had been writing on weekends for two…</p>
                          <Link href="#" className="card-link" style={{ marginTop: '1rem' }}>Read Article</Link>
                      </div>
                  </div>

                  <div className="blog-card reveal active" style={{ transitionDelay: '0.2s' }}>
                      <div className="blog-image">
                          <img src="/images/blog_3_1777898854422.png" alt="African business professionals at trade conference" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">April 17, 2026</div>
                          <h3>AfCFTA Is the Biggest Wealth Opportunity of Our Generation. Here Is Why Most Diaspora Investors Are Missing It.</h3>
                          <p>A single market. 1.4 billion people. 54 countries. Combined GDP of $3.4 trillion. And tariffs being dismantled across the largest free trade area ever created by number of participating nations….</p>
                          <Link href="#" className="card-link" style={{ marginTop: '1rem' }}>Read Article</Link>
                      </div>
                  </div>

                  <div className="blog-card reveal active">
                      <div className="blog-image">
                          <img src="/images/blog_4_1777899151103.png" alt="African family building financial future together" />
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">April 10, 2026</div>
                          <h3>You Are Sending $100 Billion Home Every Year. None of It Is Building Wealth.</h3>
                          <p>A member of our community said something to me recently that I keep coming back to. She had been sending money home for twelve years. Every month, without fail. And…</p>
                          <Link href="#" className="card-link" style={{ marginTop: '1rem' }}>Read Article</Link>
                      </div>
                  </div>

                  <div className="blog-card reveal active" style={{ transitionDelay: '0.1s' }}>
                      <div className="blog-image">
                          <div style={{ width: '100%', height: '100%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: 'var(--text-muted)' }}>Image Placeholder</span>
                          </div>
                      </div>
                      <div className="blog-content">
                          <div className="blog-date">April 3, 2026</div>
                          <h3>Western Aid to Africa Is Being Cut. This Is Your Moment.</h3>
                          <p>Something happened in 2025 that most people did not notice because it arrived quietly, buried in government budget announcements and policy documents nobody reads at the dinner table. The US…</p>
                          <Link href="#" className="card-link" style={{ marginTop: '1rem' }}>Read Article</Link>
                      </div>
                  </div>

              </div>

              {/* Pagination */}
              <div style={{ marginTop: '4rem', textAlign: 'center' }} className="reveal active">
                  <Link href="#" className="btn btn-secondary">Next Page &rarr;</Link>
              </div>
          </div>
      </section>
    </main>
  );
}
