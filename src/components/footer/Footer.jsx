import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Templates", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
  };

  const socialIcons = [
    { icon: <FaInstagram />, key: "insta" },
    { icon: <FaFacebookF />, key: "fb" },
    { icon: <FaXTwitter />, key: "x" },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-400 px-6 lg:px-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700">

          <div>
            <h2 className="text-3xl font-bold text-white">DigiTools</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3 text-sm">
                {items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-purple-400 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xl  text-white">Social Links</h3>

            <div className="flex gap-3">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-400 hover:text-white transition active:p-2"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-sm text-gray-500">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-purple-400">Privacy Policy</a>
            <a className="hover:text-purple-400">Terms of Service</a>
            <a className="hover:text-purple-400">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;