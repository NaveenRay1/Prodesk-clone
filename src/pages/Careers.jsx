import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { db, storage } from '../firebase'; // Import Database AND Storage
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Careers() {
  const heroImage = "/carrers.jpg";
  const title = "Welcome to Prodesk";
  const heading = "CAREERS AT PRODESK";

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedin: ''
  });
  const [file, setFile] = useState(null); // To store the selected file
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your CV/Resume.");
      return;
    }

    setLoading(true);

    try {
      // 1. Upload File to Firebase Storage
      // Create a unique name for the file (e.g., "resumes/12345_naveen_cv.pdf")
      const fileRef = ref(storage, `resumes/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      
      // 2. Get the Download URL of the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 3. Save Applicant Data + File URL to Firestore Database
      await addDoc(collection(db, "applicants"), {
        ...formData,
        cvUrl: downloadURL, // Link to the file
        createdAt: serverTimestamp()
      });

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', position: '', linkedin: '' });
      setFile(null);

    } catch (error) {
      console.error("Error submitting application: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      {/* Intro Section (Unchanged) */}
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

      {/* Life At Prodesk (Unchanged) */}
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

      {/* Campus to Corporate (Unchanged) */}
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

      {/* Testimonial (Unchanged) */}
      <div className="mt-8">
        <p className="italic text-gray-500 border-l-4 border-gray-200 pl-4 mb-2">
          "At Prodesk, I didn't just learn how to code; I learned how to engineer solutions. The mentorship I received here defined my career."
        </p>
        <p>
          — <strong className="text-gray-800 font-semibold">Alumni Testimonial</strong>
        </p>
      </div>

      {/* Open Positions (Unchanged) */}
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
            <li><strong className="text-gray-800 font-semibold">Roles: </strong> Backend (Python/Java), Frontend (React/Angular), and Full Stack Developers.</li>
            <li><strong className="text-gray-800 font-semibold">What you'll do: </strong> Architect scalable systems and build intuitive user interfaces.</li>
          </ul>
        </div>
        <div>
          <strong className="text-gray-800 font-semibold block">2. Mobile Development</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong className="text-gray-800 font-semibold">Roles: </strong> iOS (Swift), Android (Kotlin), and Flutter Engineers.</li>
            <li><strong className="text-gray-800 font-semibold">What you'll do: </strong> Build high-performance mobile apps for the thumb-generation.</li>
          </ul>
        </div>
        <div>
          <strong className="text-gray-800 font-semibold block">3. Data & AI</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong className="text-gray-800 font-semibold">Roles: </strong> Data Scientists, ML Engineers, and Data Analysts.</li>
            <li><strong className="text-gray-800 font-semibold">What you'll do: </strong> Turn raw data into predictive insights and intelligent automation.</li>
          </ul>
        </div>
        <div>
          <strong className="text-gray-800 font-semibold block">4. Business Growth</strong>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong className="text-gray-800 font-semibold">Roles: </strong> Business Development Managers, Pre-Sales Consultants, and Digital Marketers.</li>
            <li><strong className="text-gray-800 font-semibold">What you'll do: </strong> Drive the company's growth and manage global client relationships.</li>
          </ul>
        </div>
      </div>

      {/* ==================== NEW APPLICATION FORM SECTION ==================== */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        
        <h3 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
          READY TO JOIN US?
        </h3>
        <p className="text-gray-600 mb-8">
          Don't wait for the perfect opportunity. Create it. Fill out the form below to apply.
        </p>

        {success ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
            <p className="mb-4">Thank you for applying to Prodesk IT. Our HR team will review your CV and get back to you shortly.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="text-sm font-bold text-green-700 underline hover:text-green-900"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg border border-gray-100 space-y-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Row 2: Phone & Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="+91..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Position Applying For</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                >
                  <option value="" disabled>Select a Role</option>
                  <option value="Software Engineer">Software Engineer (Backend/Frontend/Fullstack)</option>
                  <option value="Mobile Developer">Mobile Developer (iOS/Android)</option>
                  <option value="Data Scientist">Data Scientist / AI Engineer</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Internship">Internship (Campus to Corporate)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: LinkedIn & File Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">LinkedIn / Portfolio URL</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Upload CV / Resume</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? "Submitting Application..." : "Submit Application"}
            </button>
            
          </form>
        )}
      </div>

    </PageLayout>
  );
}