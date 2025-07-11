import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Smooth scroll handling
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      title: "Vehicle Tracking System",
      description: "Advanced GPS-based tracking solution for fleet management with real-time monitoring, route optimization, and comprehensive reporting.",
      icon: "🚛",
      features: ["Real-time GPS tracking", "Route optimization", "Driver behavior analysis", "Fuel management"],
      details: {
        overview: "Comprehensive vehicle tracking and fleet management solution designed to optimize your transportation operations and reduce costs.",
        keyFeatures: [
          "Real-time GPS tracking with live map interface",
          "Geofencing and alert notifications",
          "Route optimization for fuel efficiency",
          "Driver behavior monitoring and scoring",
          "Maintenance scheduling and reminders",
          "Fuel consumption tracking and reporting",
          "Speed monitoring and violation alerts",
          "Historical route playback and analysis"
        ],
        benefits: [
          "Reduce operational costs by up to 25%",
          "Improve driver safety and accountability",
          "Enhance customer service with accurate ETAs",
          "Optimize fuel consumption and reduce emissions",
          "Streamline fleet maintenance operations"
        ],
        industries: ["Logistics & Transportation", "Delivery Services", "Construction", "Public Transportation", "Emergency Services"],
        website: "www.himusoftech.com/vehicle-tracking"
      }
    },
    {
      title: "Tally Automation",
      description: "Sales and Purchase automation from SDMS to Tally in Minutes. Streamline your accounting processes with automated Tally integration, reducing manual work and improving accuracy.",
      icon: "📊",
      features: ["SDMS to Tally automation", "Real-time sync", "Report generation", "Error reduction"],
      details: {
        overview: "Revolutionary automation solution that seamlessly integrates SDMS (Sales & Distribution Management System) with Tally, eliminating manual data entry and ensuring accuracy.",
        keyFeatures: [
          "Automated sales data transfer from SDMS to Tally",
          "Purchase order automation and synchronization",
          "Real-time inventory updates across systems",
          "Automated invoice generation and posting",
          "Multi-location and multi-company support",
          "Custom mapping for different account heads",
          "Error validation and exception handling",
          "Scheduled and on-demand sync options"
        ],
        benefits: [
          "Reduce data entry time from hours to minutes",
          "Eliminate human errors in accounting",
          "Ensure 100% data consistency across systems",
          "Improve cash flow with faster invoicing",
          "Generate real-time financial reports"
        ],
        industries: ["Retail & Distribution", "Manufacturing", "Wholesale Trading", "FMCG", "Pharmaceutical"],
        website: "www.himusoftech.com/tally-automation"
      }
    },
    {
      title: "GST Billing Software",
      description: "Comprehensive GST compliant billing solution with invoice generation, tax calculations, and regulatory compliance.",
      icon: "🧾",
      features: ["GST compliance", "Invoice automation", "Tax calculations", "Compliance reports"],
      details: {
        overview: "Complete GST billing and compliance solution that ensures your business meets all regulatory requirements while streamlining your billing processes.",
        keyFeatures: [
          "GST compliant invoice generation",
          "Automated tax calculations (CGST, SGST, IGST)",
          "E-way bill generation and management",
          "GSTR-1, GSTR-3B report generation",
          "TDS and TCS calculations",
          "HSN/SAC code management",
          "Multi-state taxation handling",
          "Digital signature integration"
        ],
        benefits: [
          "100% GST compliance guaranteed",
          "Reduce compliance costs and penalties",
          "Faster invoice processing and delivery",
          "Automated tax filing and returns",
          "Real-time tax liability tracking"
        ],
        industries: ["Retail", "Services", "Manufacturing", "Trading", "E-commerce"],
        website: "www.himusoftech.com/gst-billing"
      }
    },
    {
      title: "LPG Suvidha",
      description: "Manage your STOCK, Payments Reconciliation and Daily operations with ease. The app will reconcile Godown stock, Delivery boy sales, and compare with SDMS reports for deviation. Complete LPG distributor management system for efficient operations.",
      icon: "⛽",
      features: ["Stock reconciliation", "Payment reconciliation", "SDMS comparison", "Delivery management"],
      details: {
        overview: "Comprehensive LPG distributor management system that streamlines all aspects of LPG distribution business from stock management to customer delivery.",
        keyFeatures: [
          "Real-time godown stock management",
          "Delivery boy sales tracking and reconciliation",
          "SDMS report comparison and deviation analysis",
          "Customer database and booking management",
          "Payment tracking and reconciliation",
          "Cylinder tracking and inventory management",
          "Route optimization for deliveries",
          "Commission calculation for delivery personnel"
        ],
        benefits: [
          "Eliminate stock discrepancies and losses",
          "Improve delivery efficiency by 30%",
          "Automate payment reconciliation process",
          "Real-time visibility into business operations",
          "Reduce manual errors and improve accuracy"
        ],
        industries: ["LPG Distribution", "Gas Agencies", "Energy Sector", "Retail Gas"],
        website: "www.himusoftech.com/lpg-suvidha"
      }
    }
  ];

  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and requirements.",
      icon: "💻"
    },
    {
      title: "System Integration",
      description: "Seamlessly integrate different systems and platforms to create unified business processes.",
      icon: "🔗"
    },
    {
      title: "Automation Solutions",
      description: "Automate repetitive tasks and processes to improve efficiency and reduce operational costs.",
      icon: "⚡"
    },
    {
      title: "Consulting Services",
      description: "Expert technology consulting to help you make informed decisions about your digital transformation.",
      icon: "💡"
    }
  ];

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Himu SofTech India Pvt Ltd
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'products', label: 'Products' },
                  { id: 'services', label: 'Services' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
              Innovating Software
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Since 2013
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses with cutting-edge software solutions. From vehicle tracking to automation systems, we build technology that drives success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Explore Our Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                12+ Years of Excellence
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since 2013, Himu SofTech India Pvt Ltd has been at the forefront of software innovation, delivering robust solutions that power businesses across industries. Our expertise spans from complex tracking systems to streamlined automation tools.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">12+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052" 
                alt="Our Team"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive software solutions designed to streamline your business operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => openProductModal(product)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-blue-300 font-medium rounded-lg hover:from-blue-600/30 hover:to-cyan-600/30 hover:border-blue-400/50 transition-all duration-300"
                >
                  Learn More & Website Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              End-to-end technology solutions tailored to meet your unique business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1495576775051-8af0d10f19b1" 
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with innovative software solutions? Get in touch with our team of experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-400">Support@himusoftech.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-400">+91 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-400">12 5th Main 2nd Block 3rd Stage<br />Basaveshwaranagar, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Himu SofTech India Pvt Ltd
            </h3>
            <p className="text-gray-400 mb-6">
              Innovating software solutions since 2013
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Support</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Himu SofTech India Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Product Details Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{selectedProduct.icon}</span>
                <h2 className="text-2xl font-bold text-white">{selectedProduct.title}</h2>
              </div>
              <button 
                onClick={closeProductModal}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-white text-xl">×</span>
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProduct.details.overview}</p>
              </div>

              {/* Website Link */}
              <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Product Website</h3>
                <a 
                  href={`https://${selectedProduct.details.website}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-cyan-300 hover:text-cyan-200 underline break-all"
                >
                  {selectedProduct.details.website}
                </a>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProduct.details.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {selectedProduct.details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Target Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.details.industries.map((industry, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded-full text-sm">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Interested in {selectedProduct.title}?</h3>
                <p className="text-gray-400 mb-4">Contact us for a demo or custom implementation</p>
                <button 
                  onClick={() => {
                    closeProductModal();
                    scrollToSection('contact');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;