import React from 'react';
import { Mail, Globe } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: "James Kenyon-Brown",
    title: "CEO & Founder",
    subtitle: "Enterprise Digital & AI Strategy",
    email: "james@alethiai.com"
  },
  {
    name: "Arnab Tagore",
    title: "CTO & Founder",
    subtitle: "Global Enterprise Data Architecture",
    email: "arnab@alethiai.com"
  },
  {
    name: "Saksham Chawla",
    title: "CPO & Founder",
    subtitle: "Product Strategy & Security",
    email: "saksham@alethiai.com"
  },
  {
    name: "Prakash Jawahar",
    title: "Lead Engineer, Front-End & UX",
    subtitle: "Fintech & Defense Systems",
    email: "prakash@alethiai.com"
  },
  {
    name: "Prithvi Iyer",
    title: "Lead Engineer, Back-End & AI",
    subtitle: "Military Grade AI Solutions",
    email: "prithvi@alethiai.com"
  },
  {
    name: "Anant Kumar",
    title: "Lead Engineer, Infrastructure",
    subtitle: "Scalable Cloud AI Systems",
    email: "anant@alethiai.com"
  }
];

// Front of Business Card Component
const CardFront = () => {
  return (
    <div className="relative bg-white shadow-2xl" style={{ width: '1050px', height: '600px' }}>
      {/* Main Logo - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="font-inter font-light tracking-widest text-6xl mb-8">
          <span className="text-gray-900">AL</span>
          <span className="text-assurance-teal">Ξ</span>
          <span className="text-gray-900">ΤΗΙ ΑΙ</span>
        </h1>
      </div>
      
      {/* Tagline - Bottom Center */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <p className="text-assurance-teal font-inter text-base tracking-wider uppercase font-medium">
          The Assurance Platform for Technology Due Diligence
        </p>
      </div>
    </div>
  );
};

// Back of Business Card Component
const CardBack = ({ member }) => {
  return (
    <div className="relative bg-white shadow-2xl overflow-hidden" style={{ width: '1050px', height: '600px' }}>
      {/* Horizontal Teal Accent Strip */}
      <div className="absolute left-0 right-0 bottom-0 h-1.5 bg-assurance-teal"></div>
      
      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-between pl-12 pr-12 py-16">
        {/* Top Section - Name & Title */}
        <div className="space-y-3">
          <h2 className="text-gray-900 font-inter font-bold text-3xl leading-tight">
            {member.name}
          </h2>
          <p className="text-assurance-teal font-inter font-semibold text-lg">
            {member.title}
          </p>
        </div>
        
        {/* Bottom Section - Contact Info */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-assurance-teal" />
            <p className="text-gray-900 font-inter text-base">
              {member.email}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-assurance-teal" />
            <p className="text-gray-600 font-inter text-sm">
              alethiai.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 font-inter font-light text-5xl mb-4 tracking-wide">
            ALΞΤΗΙ ΑΙ Business Cards
          </h1>
          <p className="text-assurance-teal font-inter text-sm uppercase tracking-wider font-medium">
            High-Definition Print Templates
          </p>
        </div>
        
        {/* Front Card */}
        <div className="mb-20">
          <h2 className="text-assurance-teal font-inter font-semibold text-2xl mb-8 tracking-wide">
            Front of Card
          </h2>
          <div className="flex justify-center">
            <CardFront />
          </div>
        </div>
        
        {/* Back Cards Grid */}
        <div className="mb-12">
          <h2 className="text-assurance-teal font-inter font-semibold text-2xl mb-8 tracking-wide">
            Back of Cards - Team Members
          </h2>
          <div className="grid grid-cols-1 gap-12 items-center justify-items-center">
            {teamMembers.map((member, index) => (
              <CardBack key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

