
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 mt-16">
        <section className="py-16 md:py-24">
          <div className="container-padding mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About DREAM</h1>
              <p className="mt-4 text-muted-foreground">Our story and mission</p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="About DREAM" 
                  className="h-auto w-full object-cover"
                />
              </div>
              
              <div className="space-y-8 text-lg">
                <p>
                  Founded in 2020, DREAM was born from a passion for quality and design. Our mission
                  is to create premium clothing that combines exceptional craftsmanship with contemporary style.
                </p>
                
                <h2 className="text-2xl font-bold">Our Philosophy</h2>
                <p>
                  At DREAM, we believe that everyone deserves to experience the confidence that comes with 
                  wearing truly premium clothing. We're committed to making luxury accessible without 
                  compromising on quality or ethics.
                </p>
                
                <h2 className="text-2xl font-bold">Our Materials</h2>
                <p>
                  We source only the finest materials from sustainable suppliers around the world. From Italian 
                  leather to premium cashmere, every fabric is selected for its exceptional quality, durability,
                  and minimal environmental impact.
                </p>
                
                <h2 className="text-2xl font-bold">Our Craftsmanship</h2>
                <p>
                  Each DREAM garment is crafted with meticulous attention to detail. Our skilled artisans 
                  combine traditional techniques with modern innovation to create pieces that are not only 
                  beautiful but built to last.
                </p>
                
                <h2 className="text-2xl font-bold">Our Promise</h2>
                <p>
                  We stand behind every product we create. If you're ever unsatisfied with your purchase,
                  we'll make it right. That's our guarantee to you.
                </p>
                
                <p className="italic">
                  "Fashion is about dressing according to what's fashionable. Style is more about being yourself."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
