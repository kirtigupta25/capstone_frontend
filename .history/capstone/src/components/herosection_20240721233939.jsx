import React from 'react';

function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center">
      <img
        src="https://www.hydropoint.com/wp-content/uploads/What-is-smart-irrigation-1.jpeg"
        alt="Smart Irrigation"
        className="h-full max-w-screen-md object-cover shadow-lg"
      />
    </div>
  );
}

export default HeroSection;
