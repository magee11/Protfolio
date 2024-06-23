import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialList = [
  { icons: <FaInstagram />, url: "/" },
  { icons: <FaGithub />, url: "/" },
  { icons: <FaLinkedin />, url: "/" },
  { icons: <FaTwitter />, url: "/" },
];
const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialList.map((item, index) => (
        <Link href={item.url} key={index} className={iconStyle}>
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
