"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const service = [
  {
    num: "01",
    title: "React JS Developer",
    desceription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, assumenda vero voluptas facilis modi veniam natus sunt ratione neque esse quia quo corrupti temporibus soluta molestias vel ad eaque.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Developer",
    desceription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, assumenda vero voluptas facilis modi veniam natus sunt ratione neque esse quia quo corrupti temporibus soluta molestias vel ad eaque.",
    href: "",
  },
  {
    num: "03",
    title: "MERN Stack Developer",
    desceription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, assumenda vero voluptas facilis modi veniam natus sunt ratione neque esse quia quo corrupti temporibus soluta molestias vel ad eaque.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    desceription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, assumenda vero voluptas facilis modi veniam natus sunt ratione neque esse quia quo corrupti temporibus soluta molestias vel ad eaque.",
    href: "",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className=" container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {service.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex  justify-between items-center">
                  <div className="text-5xl font-extrabold group-hover:text-accent transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white text-black group-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight />
                  </Link>
                </div>
                {/* title  */}
                  <h2 className=" text-[32px] text-white group-hover:text-accent transition-all duration-500 font-bold leading-none">{service.title}</h2>
                  <p className="text-white/70 group-hover:text-white transition-all duration-500">{service.desceription}</p>
                  <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
