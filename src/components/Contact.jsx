import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
   const form = useRef();
   const [loading, setLoading] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
     setLoading(true);

    emailjs
      .sendForm(
        "service_cj1bram",
        "template_62xcvjj",
        form.current,
        "UUOlVPBVGMEfGi9oD"
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
           setLoading(false); 
        },
        (error) => {
          alert("Something went wrong 😢");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 overflow-x-hidden bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mt-10 mb-12"
        >
          Contact <span className="text-amber-500">Me</span>
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
           ref={form}
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input type="hidden" name="title" value="Portfolio Contact" />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-gray-700 focus:border-amber-500 outline-none px-4 py-3 rounded-lg transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-gray-700 focus:border-amber-500 outline-none px-4 py-3 rounded-lg transition"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full bg-transparent border border-gray-700 focus:border-amber-500 outline-none px-4 py-3 rounded-lg transition"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(245,158,11,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "none" }}
            className="w-full bg-amber-500 text-black py-3 rounded-lg font-semibold"
           
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
