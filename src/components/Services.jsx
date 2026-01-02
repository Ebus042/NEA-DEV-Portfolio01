import { servicesSection } from "../data/constant";
import { motion } from "framer-motion";
import heroImg from "../assets/HeroImg.png";
// Variants for parent (controls stagger timing)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // each card delays by 0.3s
    },
  },
};

// // Variants for each card
// const cardVariants = {
//   hidden: { x: 100, opacity: 0 }, // 👈 slide up from bottom
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// Card variants (dynamic direction)
const cardVariants = (direction) => ({
  hidden: { x: direction === "left" ? -200 : 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Services = () => {
  return (
    <section className="my-44">
      <div>
        <h3 className="text-center font-bold my-32 text-2xl text-gray-700 lg:text-4xl">
          Services I offer
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 py-4 gap-5 lg:gap-10 mx-10 md:grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3
          bg-green-100
          "
        >
          {servicesSection.map((section, id) => (
            <motion.div
              // variants={cardVariants}

              variants={cardVariants(id % 2 === 0 ? "left" : "right")} // odd = left, even = right
              key={id}
              className="bg-green-900 h-full flex flex-col px-4 rounded-lg shadow-lg"
            >
              <h2
                className="flex w-64 max-xs:w-56 max-xs:text-sm md:w-72 md:text-lg lg:text-lg font-bold lg:w-96 xl:max-w-full xl:text-2xl
               text-white py-1 px-2 rounded-md m-auto items-center justify-center my-5 bg-emerald-500"
              >
                {section.title}
              </h2>
              <ul className="h-full py-5">
                {section.labels.map((label, id) => (
                  <li key={id} className="py-2 md:text-xl lg:3xl text-gray-100">
                    <span>✔️ </span>
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
