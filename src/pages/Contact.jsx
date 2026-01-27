import React from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  // Images
  const sideImage = "/Frontview.webp"; 
  const officeImage = "/officeLoaction.webp";
  
  // Real Google Maps Embed URL for 91springboard Sector 2, Noida
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.469796562635!2d77.3114433150816!3d28.585681982436425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad7038e12b%3A0x6b43241416805842!2s91springboard%20Sector%202%2C%20Noida!5e0!3m2!1sen!2sin!4v1625642642875!5m2!1sen!2sin";

  return (
    <div className="bg-white min-h-screen">
      
      {/* ==================== 1. SPLIT HERO SECTION ==================== */}
      <section className="flex flex-col lg:flex-row w-full">
        
        {/* LEFT: CONTENT */}
        <div className="lg:w-1/2 w-full bg-white px-8 py-16 lg:px-20 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
          
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
            CONTACT US
          </h4>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
            LET'S BUILD SOMETHING EXTRAORDINARY.
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
            Ready to transform your business? Our team of engineers and strategists is ready to help you navigate your next digital leap.
          </p>

          {/* WhatsApp Button (Custom Color, No Hover Effect) */}
          <a
            href="https://wa.me/918851407750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center w-fit bg-[#4F786D] text-white font-bold py-3 px-6 rounded mb-10"
          >
            <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z"/>
            </svg>
            Message us on WhatsApp
          </a>

          {/* Contact Details */}
          <div style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            <h4 className="text-lg font-bold uppercase text-gray-900 mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
              PRODESK IT
            </h4>

            <p className="text-sm text-gray-600 mb-4 max-w-xs leading-relaxed">
              4th Floor, 91springboard, Plot No. D, 107, Vyapar Marg, D Block, Sector 2, Noida, Uttar Pradesh 201301
            </p>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <a href="mailto:info@prodesk.in" className="hover:text-[#4F786D] transition-colors">info@prodesk.in</a>
              </p>
              <p>
                <a href="tel:8851407750" className="hover:text-[#4F786D] transition-colors">8851407750</a>
              </p>
            </div>

            {/* Hours Dropdown Style */}
            <div className="mt-6 text-sm text-gray-600 border-t border-gray-100 pt-4 w-fit">
              <div className="flex items-center gap-2 cursor-pointer">
                 <span>Open today 09:00 am – 05:00 pm</span>
                 <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="lg:w-1/2 w-full relative min-h-[400px] lg:min-h-auto order-1 lg:order-2">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${sideImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>

      {/* ==================== 2. MAP SECTION ==================== */}
      <section className="w-full mt-5 h-[450px] relative overflow-hidden bg-gray-100">
        
        {/* White Mask at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white z-10 pointer-events-none" />

        {/* Get Directions Button Overlay */}
        <a
          href="https://www.google.com/maps/dir//91springboard+Sector+2,+Noida"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-3 rounded shadow-lg hover:bg-gray-50 transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-blue-600">
            <path d="M19.94 6.078l-7.273 14.546c-.129.265-.345.398-.648.398a.962.962 0 01-.17-.023.716.716 0 01-.557-.705V13.75H4.746a.716.716 0 01-.704-.557.736.736 0 01.045-.477.687.687 0 01.33-.341L18.962 5.1a.683.683 0 01.33-.08c.204 0 .375.073.511.217a.678.678 0 01.21.392.69.69 0 01-.073.448z"/>
          </svg>
          GET DIRECTIONS
        </a>

        {/* Google Map Iframe */}
        <iframe
          title="91Springboard Sector 2 Noida"
          src={mapUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </section>

      {/* ==================== 3. OFFICE IMAGE SECTION ==================== */}
      <section className="bg-white py-5 lg:py-8 text-center">
        <h4 
          className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-10" 
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          OFFICE LOCATION
        </h4>
        
        {/* Full Width Office Image */}
        <div className="w-full h-[300px] md:h-[600px] relative">
          <img 
            src={officeImage} 
            alt="Prodesk Office Location" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}