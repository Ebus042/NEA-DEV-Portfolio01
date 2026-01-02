import { aboutMe } from "../data/constant";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="my-20 flex flex-col justify-center items-center">
      <div>
        <div>
          {aboutMe.map((section, id) => (
            <div key={id}>
              <h2 className="uppercase xl:text-4xl font-bold text-red-300 text-2xl text-center lg:text-2xl md:text-lg my-10 py-4">
                {section.title}
              </h2>

              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col xl:flex-row items-center w-full px-2 justify-evenly bg-gradient-to-tr from-emerald-300 to-green-100 pt-10"
              >
                {/* <div className="bg-slate-600 rounded-md "> */}
                <motion.p
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                  className=" bg-green-900 lg:mx-0 hover:bg-green-800
                    hover:text-gray-100 transition-all ease-in-out duration-500 lg:leading-10 lg:ml-8 rounded-xl lg:w-1/2 shadow-2xl
                    lg:py-4 lg:px-8 lg:text-2xl leading-8 py-2 px-2 mx-10 text-gray-50"
                >
                  {section.descriptions}
                </motion.p>

                {/* </div> */}
                <div
                  className="relative before:absolute before:content-[''] before:w-[19rem] before:h-[19rem]
                  before:bottom-[3.5rem] before:rounded-full md:before:top-32 max-xs:before:w-72 max-xs:before:h-72 max-xs:before:top-[5.5rem]
                  md:before:w-[24rem] md:before:h-[24rem]
                  flex justify-center 
                  before:bg-emerald-300 before:z-10
                  after:absolute after:content-[''] after:w-[23rem] after:h-[23rem] after:-z-0 
                  after:bottom-[1.6rem] after: after:rounded-full after:bg-green-200 max-xs:after:w-80 max-xs:after:h-80
                  md:after:w-[27rem] md:after:h-[27rem]"
                >
                  <motion.img
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    loading="lazy"
                    src={section.image}
                    className="object-center z-10"
                    alt="Potrait image of Ebuka"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
