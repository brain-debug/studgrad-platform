export const metadata = {
  title: 'About Us | Supi Consulting',
  description: "Promoting Pan-African Economic Transformation. Learn about Supi Consulting's mission and approach to empowering the African diaspora.",
};

export default function About() {
  return (
    <main>
      {/* Header */}
      <header className="page-header">
          <div className="container reveal active">
              <h1 className="text-gold">About Us</h1>
              <p>Promoting Pan-African Economic Transformation</p>
          </div>
      </header>

      {/* Main Content */}
      <section className="section">
          <div className="container">
              <div className="about-content">
                  <div className="about-section reveal active">
                      <p>Supi Consulting is a Pan-African consulting firm based in Mauritius, at the heart of Africa’s economic awakening. Driven by the belief that Africans have the sovereign right to harness their resources as they see fit, Supi Consulting advocates for economic prosperity as the cornerstone of freedom and self-determination. We firmly believe that every African has a vital role to play in building the continent’s future. Through responsibility and collective action, Africans can create generational wealth and a better future for their families and communities.</p>
                  </div>

                  <div className="about-section reveal active">
                      <h2>Our Mission</h2>
                      <p>At Supi Consulting, our mission is to empower the African diaspora—a community with immense, untapped potential—to transform Africa into a thriving hub of innovation and opportunity. We achieve this by providing personalized consulting and coaching services that guide diaspora entrepreneurs in establishing their businesses on the continent. Through our efforts, we aim to bridge the gap between vision and action, fostering the emergence of a new generation of business leaders deeply embedded in Africa’s future.</p>
                  </div>

                  <div className="about-section reveal active">
                      <h2>Our Approach</h2>
                      <p>We recognize that true transformation requires more than ambition; it demands strategy, connections, and effective execution. Supi Consulting works hand-in-hand with aspiring entrepreneurs, providing not only cutting-edge expertise but also access to a powerful network that connects the African diaspora with local entrepreneurs across the continent. By building these bridges, we cultivate a mutually supportive ecosystem that drives sustainable development.</p>
                  </div>

                  <div className="about-section reveal active">
                      <h2>Our Story</h2>
                      <p>Supi Consulting was initially founded in Switzerland in 2017 with a focus on coaching and supporting a diverse group of entrepreneurs. Through this work, the company identified a significant gap: the lack of information and expertise among the African diaspora when it comes to reinvesting in their continent of origin. Aware of the challenges faced by these investors, particularly due to the lack of market knowledge, Supi Consulting decided to specialize in African investments. This shift led to a strategic move to Africa, where the company now focuses on this vital market, offering expert support and guidance to diaspora investors.</p>
                  </div>

                  <div className="about-section reveal active">
                      <h2>Recognizing Geopolitical Change</h2>
                      <p>Supi Consulting also acknowledges the major geopolitical shift we are currently experiencing. This window of opportunity for Africans and descendants of Africans is a unique moment to achieve true freedom and self-determination. As global dynamics evolve, the African continent is in a privileged position for unprecedented growth and transformation. This is the moment for the African diaspora to play a pivotal role in shaping Africa’s future and reclaiming its rightful place in the world.</p>
                  </div>

                  <div className="about-section reveal active">
                      <h2>Why Supi Consulting?</h2>
                      <div className="about-features">
                          <div className="feature-box">
                              <h3 className="text-gold">Pan-African Vision</h3>
                              <p>We are deeply committed to the ideals of Pan-Africanism, advocating for Africans to take control of their destiny and economic future.</p>
                          </div>
                          <div className="feature-box">
                              <h3 className="text-gold">Empowerment through Action</h3>
                              <p>Our approach is centered around tangible results, ensuring that every entrepreneur we work with has the tools and confidence needed to succeed.</p>
                          </div>
                          <div className="feature-box">
                              <h3 className="text-gold">Connecting Diaspora & Continent</h3>
                              <p>By uniting the African diaspora with local entrepreneurs, we create opportunities for innovation, wealth creation, and shared prosperity.</p>
                          </div>
                      </div>
                      <p style={{ marginTop: '3rem', textAlign: 'center', fontSize: '1.25rem' }}>At Supi Consulting, we believe that Africa’s brightest days are yet to come. Together, we can shape a future where economic independence and self-determination are not just aspirations but realities. Join us in transforming the continent—one business at a time.</p>
                  </div>

                  <div className="about-section reveal active">
                      <h2>Strategy</h2>
                      <p>Our strategy focuses on providing detailed, professional assessments and practical guidance to help the diaspora make informed and scalable investment decisions. By leveraging digital tools and local partnerships, we can effectively expand our services to reach a larger audience, ensuring more diaspora members have access to reliable information and advice on investment opportunities in Africa. This approach allows us to grow alongside our clients, providing personalized support while increasing our capacity to meet growing demand.</p>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
