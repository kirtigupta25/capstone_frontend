import React from 'react';

function HeroSection() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="https://www.hydropoint.com/wp-content/uploads/What-is-smart-irrigation-1.jpeg"
        alt="Smart Irrigation"
        className="absolute inset-0 w-full h-full object-cover shadow-lg"
      />
    </div>
  );
}

export default HeroSection;
