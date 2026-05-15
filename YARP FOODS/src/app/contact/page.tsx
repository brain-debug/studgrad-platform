"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions about our products or want to place an order? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 flex-grow pattern-grid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                YARP Foods is dedicated to providing you with the best agro-processed products. Reach out to us through any of the channels below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground">University of Energy and Natural Resources (UENR)<br />Sunyani, Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Phone Number</h3>
                    <p className="text-muted-foreground">+233 595 967 300</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Email Address</h3>
                    <p className="text-muted-foreground">info@yarpfoodsltd.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Social links are currently placeholders as requested in brief */}
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    FB
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    IG
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    X
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    YT
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    TK
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-2">@YarpFoods_GHANA</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background p-8 md:p-10 rounded-3xl shadow-xl border border-border">
              <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
                  <CheckCircle2 className="shrink-0" />
                  <p className="font-medium">Thank you! Your message has been sent successfully. We will get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                      placeholder="+233 000 000 000"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
