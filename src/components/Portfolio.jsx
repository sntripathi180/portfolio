import React from "react";

import project1 from "../assets/portfolio/project1.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/project3.png";
import currencyConvertor from "../assets/portfolio/currencyConvertor.png";
import passwordGenerator from "../assets/portfolio/passwordGenerator.png";
import typingTester from "../assets/portfolio/typingTester.png";
import todo from "../assets/portfolio/todo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      demoLink: "",
      codeLink: "https://github.com/sntripathi180/PrimoCab",
    },
    {
      id: 2,
      src: project2,
      demoLink: "",
      codeLink: "https://github.com/sntripathi180/TradePilot",
    },
    {
      id: 3,
      src: project3,
      demoLink: "",
      codeLink: "https://github.com/sntripathi180/vidTube",
    },
    {
      id: 4,
      src: todo,
      demoLink: "https://todo-fawn-eta-68.vercel.app/",
      codeLink: "https://github.com/sntripathi180/Todo",
    },
    {
      id: 5,
      src: passwordGenerator,
      demoLink: "https://password-generator-navy-phi-10.vercel.app/",
      codeLink: "https://github.com/sntripathi180/password_generator",
    },
    {
      id: 6,
      src: typingTester,
      demoLink: "",
      codeLink: "https://github.com/sntripathi180/typing-test-website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="relative min-h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 auto-rows-fr w-full h-auto">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg min-h-[250px] flex flex-col justify-between"
            >
              <img
                src={src}
                alt=""
                className="w-full h-48 rounded-md duration-200 hover:scale-105 object-cover"
              />

              <div className="flex items-center justify-between px-4">
                {demoLink ? (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2"
                  >
                    <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                ) : (
                  // Spacer to push Code to right
                  <div className="w-1/2" />
                )}

                {/* Code button always on the right */}
                <a
                  href={codeLink || "#"}
                  target={codeLink ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button
                    className={`w-full px-6 py-3 m-4 duration-200 hover:scale-105 ${
                      !codeLink
                        ? "text-gray-400 line-through cursor-not-allowed"
                        : ""
                    }`}
                    disabled={!codeLink}
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
