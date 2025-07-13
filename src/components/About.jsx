import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full  bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          I’m a Full-Stack Developer with a strong focus on building scalable,
          high-performance web applications using React.js, Next.js, Node.js,
          and MongoDB/PostgreSQL. With expertise in both frontend and backend
          development, I specialize in crafting seamless, responsive, and
          efficient user experiences.
        </p>
        <br />
        <p className="text-xl">
          Beyond web development, I also have
          experience in Android app development using Kotlin and Firebase,
          enabling me to create cross-platform solutions. I am passionate about
          solving complex problems, optimizing performance, and continuously
          learning the latest industry trends.
        </p>
      </div>
    </div>
  );
};

export default About;
