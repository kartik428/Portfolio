import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
];

// Container animation (stagger effect) 1,1 rke show hota hai
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each card animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 overflow-x-hidden bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-amber-500">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(245,158,11,0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-gray-700 hover:border-amber-500 cursor-pointer"
            >
              {skill.icon}
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
