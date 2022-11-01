import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4887106/pexels-photo-4887106.jpeg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-screen h-96 flex items-center justify-center mb-10 "
    >
      <h1
        style={{ fontFamily: "Brush Script MT" }}
        className="text-[#FF577F] text-7xl"
      >
        Welcome to The Fancy Bookstore
      </h1>
    </section>
  );
};

export default Hero;
