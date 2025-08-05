import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#2F3640] text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        <div>
          <h1 className="text-2xl font-bold mb-2">SnapCart</h1>
          <p>Bringing quality groceries to your doorstep.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:font-bold">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:font-bold">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="hover:font-bold">Email: support@yourbrand.com</p>
          <p className="hover:font-bold">Phone: +91 98765 43210</p>
          <p className="hover:font-bold">Nagpur, Maharashtra</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <div className="flex space-x-4 text-2xl">
              <a href="https://instagram.com" title="Instagram">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png" alt="Instagram" className="h-6 w-6"/>
              </a>
              <a href="https://linkedin.com" title="LinkedIn">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="LinkedIn" className="h-6 w-6"/>
              </a>

              <a href="https://github.com" title="GitHub">
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/github.png" alt="GitHub" className="h-6 w-6"/>
              </a>

              <a href="mailto:support@yourbrand.com" title="Email">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" alt="Email" className="h-6 w-6"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
