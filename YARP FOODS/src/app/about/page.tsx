import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | YARP Foods",
  description: "Learn about YARP Foods, our mission, vision, core values, and our dedicated team.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Andy Donsah Yeboah",
      role: "Team & Production Lead",
      credentials: "Chemist, 4 yrs food chemistry",
      initials: "AY",
    },
    {
      name: "Amponsah Ankrah Richard",
      role: "Agri Research & Admin Lead",
      credentials: "Agri Engineer, post-harvest specialist",
      initials: "AR",
    },
    {
      name: "Louisa Yeboah",
      role: "Business Development & Marketing Lead",
      credentials: "BSc Hospitality & Business Management",
      initials: "LY",
    },
    {
      name: "Otu Prince",
      role: "Operations Lead",
      credentials: "Mechanical Engineer & Machinery Expert",
      initials: "OP",
    },
  ];

  const values = [
    { title: "Nutritional Excellence", description: "Providing fortified products that enhance health and well-being." },
    { title: "Sustainability", description: "Eco-friendly practices that protect our environment for future generations." },
    { title: "Innovation", description: "Continuously improving our processing methods and product offerings." },
    { title: "Community Empowerment", description: "Supporting local farmers and creating jobs in our communities." },
    { title: "Integrity", description: "Honest, transparent, and ethical conduct in all our business dealings." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary/90 text-primary-foreground">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/about_hero.png"
            alt="About YARP Foods"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">About YARP Foods</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
            For Quality and Affordable Flour, Look to the Baker's Saviour
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background pattern-dots">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6 text-center text-foreground">Who We Are</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed text-center">
            <p className="mb-6">
              YARP Foods is an innovative agro-processing startup based in Ghana, dedicated to transforming the agricultural landscape through value addition. We recognized a critical issue in the food industry: the heavy reliance on imported wheat flour, which drives up costs for local bakers and food producers.
            </p>
            <p>
              Our solution is premium, locally sourced cassava. By processing high-quality cassava into fortified flour and starch, we provide a sustainable, affordable, and superior alternative. We work closely with local farmers, reducing post-harvest losses and empowering the local economy while delivering world-class products to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary pattern-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-10 rounded-2xl shadow-lg border border-border">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To produce high-quality, fortified, and affordable agro-processed products that meet the diverse needs of our consumers while creating a sustainable value chain that empowers local farmers and reduces import dependency in Africa.
              </p>
            </div>
            <div className="bg-background p-10 rounded-2xl shadow-lg border border-border">
              <h3 className="font-heading text-2xl font-bold mb-4 text-accent">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading agro-processing brand in Africa, renowned for nutritional excellence, innovation, and unwavering commitment to food security and community empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background pattern-dots">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-secondary/30 pattern-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="font-heading text-3xl font-bold mb-4 text-center text-foreground">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The passionate experts driving YARP Foods' mission forward with their diverse industry experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-md text-center p-8 border border-border hover:shadow-xl transition-shadow group">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h4 className="font-heading font-bold text-xl mb-1 text-foreground">{member.name}</h4>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
