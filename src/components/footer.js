import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 md:sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="https://www.linkedin.com/in/jeremiah-chesley-a93b885/"
          class="social-icon si-rounded si-small si-linkedin">
          <i class="icon-linkedin"></i>
          <i class="icon-linkedin"></i>
        </a>
        <a
          href="https://github.com/MiahHub"
          class="social-icon si-rounded si-small si-github">
          <i class="icon-github"></i>
          <i class="icon-github"></i>
        </a>
      </div>
    </footer>
  );
}
