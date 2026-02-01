import React from "react";
import User_img from "../assets/Kartikdp1.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  // to connect with whatsapp--
  // const phoneNumber = "919893166964"; // your number
  //           const message =
  //           "Hi, I want to connect with you!";
  const handleSubmit = async (e) => {
  e.preventDefault(); // stop reload

  const formData = new FormData(e.target);

  await fetch("https://docs.google.com/forms/d/e/1FAIpQLSeg0UXhMdBwwpkvCpp2Yj_jysV0zQzCvsym3DKbgpf8AcD4Yg/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });

  alert("Email saved!");
  e.target.reset();
};


  return (
    <footer className="bg-black overflow-x-hidden text-gray-300 pt-12 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img
            src={User_img}
            alt="Userimage"
            className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-2 rounded-tr-[30px]  md:rounded-tr-[60px] rounded-bl-[30px] md:rounded-bl-[60px] object-cover"
          />
          <h2 className="text-2xl font-bold text-white">Kartik Singh</h2>
          <p className="mt-3 text-sm text-gray-400">
            Frontend Developer crafting modern, fast and user-friendly web
            experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/kartik428"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-singh-a80376311/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
          {/* email connect  */}
          <div className="bg-gradient-to-r from-black  to-black mt-8 rounded-xl w-full max-w-xl">
            <h2 className="text-white text-xl font-semibold mb-4">
              Connect us
            </h2>

             <form onSubmit={handleSubmit}>
            <div className=" flex items-center  bg-white/10 backdrop-blur-md rounded-full py-3 pr-4 md:py-2 md:text-[13px] w-90 md:w-60">
                <input
                  type="email"
                  name="entry.1711828456"
                  placeholder="Enter Your Email..."
                  className=" relative bg-transparent outline-none text-white  placeholder-gray-400 grow px-3 pl-5 w-50 md:pl-3 "
                  required
                />
                <button className=" bg-purple-600 hover:bg-purple-700 transition text-white px-5  md:px-3 py-2 md:py-1 rounded-full">
                  Email
                </button>
                  </div>
              </form>

              {/* connect with whatsapp */}
              {/* <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Connect on WhatsApp</button>
              </a> */}
          
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kartik Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
