import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pb-8 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 gap-8 md:gap-0">
      
        <div className="flex flex-col justify-center md:w-1/2 text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full-Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I specialize in the MERN stack, building scalable and efficient web
            applications. My expertise in frontend and backend development
            allows me to craft seamless and high-performance digital
            experiences.
          </p>

          {/* Button */}
          <div>
            <Link to="portfolio" smooth duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <MdKeyboardArrowRight
                  size={25}
                  className="ml-1 group-hover:rotate-90 duration-300"
                />
              </button>
            </Link>
          </div>
        </div>

        
        <div className="md:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl w-[60%] sm:w-[50%] md:w-[80%] lg:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
