import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Products | YARP Foods",
  description: "Explore our premium cassava products including Fortified Cassava Flour, HQCF, Starch Powder, and Cassava Peels.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "Fortified Cassava Flour",
      description: "Premium flour enriched with essential nutrients for healthier baking. Ideal for bread, pastries, and general culinary use.",
      features: ["Nutrient-rich", "Fine texture", "Perfect wheat substitute"],
      image: "/images/product_fortified_flour.png",
      icon: <ShieldCheck className="text-primary" size={20} />,
    },
    {
      name: "High Quality Cassava Flour (HQCF)",
      description: "Extremely fine, bright white flour processed under strict hygienic conditions. The baker's ultimate choice for high-end pastries.",
      features: ["Unfermented", "Bright white color", "Odorless"],
      image: "/images/product_hqcf.png",
      icon: <Leaf className="text-primary" size={20} />,
    },
    {
      name: "Cassava Starch Powder",
      description: "Pure white starch powder, an excellent gluten-free thickening agent for both food and industrial applications.",
      features: ["Gluten-free", "High viscosity", "Multi-purpose"],
      image: "/images/product_starch.png",
      icon: <Zap className="text-primary" size={20} />,
    },
    {
      name: "Cassava Peel",
      description: "High-quality, safely dried cassava peels serving as an affordable, energy-rich substitute in animal feed formulations.",
      features: ["Cost-effective", "Energy-rich", "Properly dried"],
      image: "/images/product_cassava_peel.png",
      icon: <Leaf className="text-accent" size={20} />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Premium Products</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover our range of high-quality, sustainable cassava products tailored for your nutritional and industrial needs.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 pattern-dots">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid gap-12 lg:gap-16">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-background rounded-3xl overflow-hidden shadow-lg border border-border group`}
              >
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary p-2 rounded-lg">
                      {product.icon}
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">{product.name}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="mb-8 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground font-medium text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Enquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
