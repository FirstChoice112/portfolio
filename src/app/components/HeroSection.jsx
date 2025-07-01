import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Johan
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            nemo voluptate nobis mollitia deserunt possimus!
          </p>
        </div>
        <div className="col-span-5"></div>
        <Image
          src="/images/pathetic.jpg"
          alt="picture"
          width={200}
          height={100}
        />
      </div>
    </section>
  );
};

export default HeroSection;
