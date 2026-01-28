import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Careers() {
  // Using the image you requested
  const heroImage = "/carrers.jpg";
  const title = "Welcome to Prodesk";
  const heading = "CAREERS AT PRODESK";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      {/* Intro Section */}
      <p>
        <strong className="text-gray-800 font-semibold block mb-2">
          Build the Future. Build Your Legacy.
        </strong>
      </p>
      
      <p>
        At Prodesk IT, we are not just building software; we are building the next generation 
        of technology leaders. We don't hire employees to fill seats; we hire innovators to 
        solve impossible problems. Whether you are a seasoned architect or a fresh graduate 
        stepping out of campus, Prodesk offers you a platform to challenge the status quo, 
        ship code that impacts millions, and accelerate your career faster than anywhere 
        else in the industry.
      </p>

      {/* Life At Prodesk */}
      <div className="mt-8 space-y-4">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            LIFE AT PRODESK
          </strong>
        </p>

        <p>
          <strong className="text-gray-800 font-semibold block">
            Code. Create. Collaborate.
          </strong>
          We believe that great software comes from happy, empowered teams. Our culture is built on transparency, autonomy, and relentless curiosity.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            <strong className="text-gray-800 font-semibold">No Red Tape: </strong>
            We hate bureaucracy. If you have a good idea, you build it. We value logic over hierarchy.
          </li>
          <li>
            <strong className="text-gray-800 font-semibold">Continuous Learning: </strong>
            Technology changes every day. We provide paid certifications, mentorship programs, and "Hackathon Fridays" to keep your skills sharp.
          </li>
          <li>
            <strong className="text-gray-800 font-semibold">Global Impact: </strong>
            Your code won't sit in a dark room. You will work on projects for global enterprises, seeing your work live in the real world.
          </li>
          <li>
            <strong className="text-gray-800 font-semibold">Work-Life Harmony: </strong>
            We work hard, but we respect your time. Flexible hours and a focus on output, not hours at a desk.
          </li>
        </ul>
      </div>

      {/* Campus to Corporate */}
      <div className="mt-12 space-y-4">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            CAMPUS TO CORPORATE PROGRAM
          </strong>
        </p>

        <p>
          <strong className="text-gray-800 font-semibold block">
            From the Classroom to the Boardroom
          </strong>
          Prodesk IT is a premier destination for top campus talent. We don't just offer you a job; we offer you a transformation. Our "Campus to Corporate" boot camp is designed to bridge the gap between academic theory and industrial reality.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            <strong className="text-gray-800 font-semibold">Real-World Projects: </strong>
            No fetching coffee. From Day 1, you will push code to production environments.
          </li>
          <li>
            <strong className="text-gray-800 font-semibold">Executive Mentorship: </strong>
            You will be paired with senior engineers who will guide your technical and professional growth.
          </li>
          <li>
            <strong className="text-gray-800 font-semibold">Rapid Growth Path: </strong>
            We have a history of promoting interns to team leads. Your growth is limited only by your ambition.
          </li>
        </ul>
      </div>

      {/* Testimonial */}
      <div className="mt-8">
        <p className="italic text-gray-500 border-l-4 border-gray-200 pl-4 mb-2">
          "At Prodesk, I didn't just learn how to code; I learned how to engineer solutions. The mentorship I received here defined my career."
        </p>
        <p>
          — <strong className="text-gray-800 font-semibold">Alumni Testimonial</strong>
        </p>
      </div>

      {/* Open Positions */}
      <div className="mt-12 space-y-6">
        <p>
          <strong className="text-gray-800 font-semibold block uppercase tracking-wide">
            OPEN POSITIONS
          </strong>
          We are always looking for exceptional talent to join our centers of excellence.
        </p>

        <div>
          <strong className="text-gray-800 font-semibold block">1. Software Engineering</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Roles: </strong>
              Backend (Python/Java), Frontend (React/Angular), and Full Stack Developers.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">What you'll do: </strong>
              Architect scalable systems and build intuitive user interfaces.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block">2. Mobile Development</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Roles: </strong>
              iOS (Swift), Android (Kotlin), and Flutter Engineers.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">What you'll do: </strong>
              Build high-performance mobile apps for the thumb-generation.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block">3. Data & AI</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Roles: </strong>
              Data Scientists, ML Engineers, and Data Analysts.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">What you'll do: </strong>
              Turn raw data into predictive insights and intelligent automation.
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-gray-800 font-semibold block">4. Business Growth</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>
              <strong className="text-gray-800 font-semibold">Roles: </strong>
              Business Development Managers, Pre-Sales Consultants, and Digital Marketers.
            </li>
            <li>
              <strong className="text-gray-800 font-semibold">What you'll do: </strong>
              Drive the company's growth and manage global client relationships.
            </li>
          </ul>
        </div>
      </div>

     {/* CTA */}
<div className="mt-12 pt-8 border-t border-gray-100">
  <p>
    <strong className="text-gray-800 font-semibold block uppercase tracking-wide mb-2">
      READY TO JOIN US?
    </strong>
    Don't wait for the perfect opportunity. Create it.
  </p>

  <p className="mt-4">
    Send your resume and portfolio to:{" "}
    <a
      href="mailto:info@prodesk.in"
      className="text-gray-800 font-semibold hover:text-[#4F786D] transition-colors"
    >
      info@prodesk.in
    </a>
  </p>
</div>

    </PageLayout>
  );
}