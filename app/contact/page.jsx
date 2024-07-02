"use client"; // top to the file


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectLabel } from "@radix-ui/react-select";
const info = [
  { icon: <FaPhoneAlt />, title: "Phone", value: "+91 9345236199" },
  { icon: <FaEnvelope />, title: "Email", value: "sample@gamil.com" },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Code Corner , Midway Town 8284",
  },
];
 const Contact = () => {
  console.log("Hello");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[50%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets Work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur voluptas
              </p>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="first name" placeholder="FirstName"/>
                <Input type="lastname" placeholder="LastName"/>
                <Input type="email" placeholder="Email"/>
                <Input type="phone" placeholder="Phone"/>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="est">React JS Developer</SelectItem>
                    <SelectItem value="cst">MERN Stack Developer</SelectItem>
                    <SelectItem value="mst">FrontEnd Engineer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[150px]" placeholder="Type your message here"/>
              <Button size="md" className="max-w-40 flex items-center max-h-[45px]">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
};


export default Contact;