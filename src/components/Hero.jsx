import AnimatedUser from "../assets/images/animateduser.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden w-full h-170 md:h-screen scroll-mt-18 flex flex-col overflow-hidden justify-center items-center px-6 md:px-45"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source
          src="../../public/videos/15439679-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0   bg-gradient-to-t from-black via-black/80 to-transparent -z-10"></div>

      <div className="max-w-5x text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-2xl mb-2">👋 Hi, I am</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Kartik Singh
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-semibold text-amber-400 mt-2">
            Frontend Developer
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          viewport={{ once: true }}
          
        >
          <p className="max-w-lg mt-4  text-gray-200">
            For the past few years, I’ve been building modern, responsive, and
            user-focused interfaces that bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4 justify-center items-center  mt-6">
            <a href="#projects">
              <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
                View Projects
              </button>
            </a>

            <a href="/Kartik Singh resume_latest.pdf" download>
              <button className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                Resume
              </button>
            </a>
            
          </div>
        </motion.div>
      </div>
      {/* <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 lg:bottom-62 lg:right-45">
          <img src={AnimatedUser} className="w-90 h-90" alt="" />
        </div> */}
    </section>
  );
};

export default Hero;
