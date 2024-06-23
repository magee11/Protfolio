import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className=" flex flex-col xl:flex-row  justify-between items-center xl:mt-8 xl:mb-24">
          <div className=" text-center xl:text-left order-2 xl:order-none">
            <span className=" text-3xl xl:text-5xl">
              Hello I'm <br />
              <span className=" text-accent">Magesh A</span>
            </span>
            <br />
            <br />
            <span className="text-2xl">React JS Developer</span>
            <p className="text-xs xl:text-[14px] max-w-[500px] text-white/80 mb-9 mt-2">
              👨‍💻 Experienced React JS developer with 1+ years of full-time
              experience. Proficient in AWS, Next JS, TypeScript, and backend
              skills in Python, Flask , Node.js, Express JS and DSA. 💻🚀
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-3">
              <Button className="items-center flex gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-10 w-10 border border-white rounded-full flex justify-center items-center
                  text-base hover:text-accent hover:border-accent py-2.5"
                />
              </div>
            </div>
          </div>

          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats/>
      </div>
    </section>
  );
}
