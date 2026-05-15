import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const products = [
    {
      name: "Fortified Cassava Flour",
      description: "Premium flour enriched with essential nutrients for healthier baking.",
      image: "/images/product_fortified_flour.png",
    },
    {
      name: "High Quality Cassava Flour",
      description: "Extremely fine, bright white flour perfect for diverse culinary applications.",
      image: "/images/product_hqcf.png",
    },
    {
      name: "Cassava Starch Powder",
      description: "Pure white starch powder, an excellent gluten-free thickening agent.",
      image: "/images/product_starch.png",
    },
    {
      name: "Cassava Peel",
      description: "High-quality dried peels ideal for nutritious animal feed.",
      image: "/images/product_cassava_peel.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Vibrant cassava farm at golden hour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/90 to-[#111812]/70 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-12">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent font-medium text-sm mb-6 animate-fade-in-up">
            Premium Agro-Processing
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight drop-shadow-lg">
            For Quality and Affordable Flour, Look to the <span className="text-accent">Baker's Saviour</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            YARP Foods brings you the finest cassava products from Ghana, processed with state-of-the-art technology for unmatched quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-background pattern-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about_hero.png"
                alt="YARP Foods Processing Facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">
                Revolutionizing Africa's <span className="text-primary">Agro-Processing</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                YARP Foods is on a mission to solve the wheat import dependency by providing high-quality, affordable cassava alternatives. We empower local farmers while delivering premium products to bakers and food industries.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "100% Locally Sourced Cassava",
                  "State-of-the-art Processing Facility",
                  "Fortified for Nutritional Excellence",
                  "Sustainable and Eco-Friendly Practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="text-primary" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group"
              >
                Discover Our Story 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary/30 pattern-dots">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">Our Premium Products</h2>
            <p className="text-muted-foreground text-lg">
              Explore our range of high-quality cassava products designed for bakeries, food industries, and animal feed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-border">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all w-fit"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
