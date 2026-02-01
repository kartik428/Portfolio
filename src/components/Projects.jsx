import { motion } from "framer-motion";
import MusicPlayer from "../assets/images/Musicplayer.png";
import FoodApp from "../assets/images/FoodApp.png";
import Blog from "../assets/images/Blog.png";

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of your amazing project and what makes it special.",
  image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  tags = ["React", "Tailwind", "Framer"],
  link = "#",
}) => {
  return (
    <>
      <motion.a
        href={link}
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 bg-[#121212] h-full">
          <motion.h3
            className="text-xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 ">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="px-3 py-1 bg-gray-300  text-black text-xs font-medium rounded-full "
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Link */}
          <motion.a
            href={link}
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-blue-600 font-medium text-sm group/link"
            target="_blank"
          >
            View Project
            <motion.span
              className="ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </div>

        {/* Animated Border on Hover */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none "
          initial={false}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </>
  );
};

// Example usage with multiple cards
export default function ProjectSection() {
  const projects = [
    {
      title: "Blog Website(MERN Stack)",
      description:
        "A full-featured blogging platform with user authentication, post creation, and commenting functionality.",
      image: Blog,
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      link: "#",
    },
    {
      title: "Music Player App(Pure JS)",
      description:
        "A sleek music player application with playlist management, audio visualization, and offline support.",
      image: MusicPlayer,
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "https://musicplayer-wbm.vercel.app/",
    },
    {
      title: "Food Recipe App(API Integration)",
      description:
        "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
      image: FoodApp,
      tags: ["React", "API", "CSS3", "HTML5"],
      link: "https://food-recipe-app-three-theta.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="min-h-screen bg-black  p-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-white mb-12 text-center pt-14"
          >
            My <span className="text-amber-500"> Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((projects, index) => (
              <ProjectCard key={index} {...projects} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
