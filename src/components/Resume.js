import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Resume } from '../data';

export default function Resume() {
  return (
    <section id="resume" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Resume
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Click here to download my resume.
          </p>
          <a href="/Images\truncated resume 2023.PDF" download>
            Click to download
          </a>
        </div>
      </div>
    </section>
  );
}
