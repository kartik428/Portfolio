import Animatedimg from "../assets/images/animateduser.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className=" overflow-x-hidden bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 py-20 gap-12 items-center ">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <img
              src={Animatedimg}
              alt="About me"
              className="rounded-2xl shadow-lg w-75 md:w-100"
            />
          </div>
        </motion.div>
        {/* Right Side - Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl flex justify-center md:justify-start items-center ms:items-start font-bold mb-6">
              About <span className="text-amber-500">Me</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-center md:text-left leading-relaxed mb-4  ">
              I’m a passionate Frontend Developer who loves building beautiful,
              responsive, and user-friendly web experiences. I focus on writing
              clean code and creating interfaces that feel smooth and intuitive.
            </p>
            <p className="text-gray-300 text-center md:text-left  leading-relaxed mb-6">
              My goal is to blend creativity with technology and deliver
              products that not only look good but also perform flawlessly on
              every device.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            // viewport={{ once: true }}
          >
            <div className="flex gap-4 justify-center md:justify-start items-center sm:items-start">
              <a href="#contact">
                <button className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition">
                  Contact Me
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
