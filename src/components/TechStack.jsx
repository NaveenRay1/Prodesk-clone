import React from "react";

// We map the brands to their filenames here for easy management
const logos = [
  { name: "AWS", file: "aws.webp" },
  { name: "TensorFlow", file: "tensorflow.webp" },
  { name: "SAP", file: "sap.webp" },
  { name: "Google Cloud", file: "google.webp" },
  { name: "Microsoft Azure", file: "microsoft.webp" },
  { name: "React", file: "react.webp" },
  { name: "Cisco", file: "cisco.webp" },
  { name: "Python", file: "python.webp" },
  { name: "Ericsson", file: "ericsson.webp" },
  { name: "TCS", file: "tat.webp" }, // Assuming 'tat.webp' is Tata/TCS
  { name: "Salesforce", file: "salesforce.webp" },
  { name: "Accenture", file: "accenture.webp" },
  { name: "Spark Minda", file: "sparkminda.webp" },
  { name: "Motherson", file: "motherson.webp" },
  { name: "Siemens", file: "siemens.webp" },
  { name: "Bosch", file: "bosch.webp" },
];

export default function TechStack() {
  return (
    // bg-white ensures this section contrasts with the black Hero
    <section className="bg-white py-20 px-8 md:px-16">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h3
          className="text-2xl md:text-3xl font-bold tracking-widest text-gray-800 uppercase"
          style={{ fontFamily: "'Raleway', sans-serif" }} // Using the font we added earlier
        >
          Technology Stack
        </h3>
        {/* Optional decorative line if needed later */}
      </div>

      {/* Logos Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile (default): grid-cols-2 (2 icons visible)
            Tablet (md): grid-cols-4 
            Desktop (lg): grid-cols-5 
        */}
<div className="grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-[110px]"
            >
              <img
                src={`/logos/${logo.file}`}
                alt={`${logo.name} logo`}
                className="max-h-[100px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}
