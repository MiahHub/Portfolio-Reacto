import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-12 py-25 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-15 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-white">
            `Hello world, Jeremiah here.`
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a multi-disciplined programmer with a decade of experience in UI
            / UX design and SQL data mangement. Concurrently working to complete
            a MERN full-stack development course to round-out my skillset.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Let's work on something together...
            </a>
            <a
              href="#portfolio"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Review my Portfolio
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src=".\Images\miahphoto.JPG"
            //get images pulled together for this
          />
        </div>
      </div>
    </section>
  );
}
