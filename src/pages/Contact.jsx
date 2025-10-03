import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";
import { AboutPage, footerIcons } from "../assets/assets.js";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const LinkStyles = `flex items-center gap-2 hover:text-white/65 transition-colors ease-linear`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  return (
    <div id="Contact" className={`${containerStyle}`}>
      <PageTitle title={"Contact"} />
      <div className="flex flex-col bedar-sc2:flex-row bg-mainColor rounded-xl overflow-hidden">
        <div className="hidden bedar-sc2:flex justify-center items-center w-1/2">
          <img
            src="https://saqibbedar.github.io/Portfolio/contact_image.webp"
            onLoad={() => setIsLoading(false)}
            className={`${isLoading ? "skeleton w-96 h-80" : ""}`}
            alt="contact-us-image"
          />
        </div>
        <div className="w-full bedar-sc2:w-1/2 flex flex-col items-center gap-1 py-12 px-5 text-white font-light leading-[26px] text-[18px]">
          <img
            onLoad={() => setIsProfileLoading(false)}
            src={AboutPage.authorProfile}
            className={`bg-[#beb7e0] w-36 h-36 rounded-full border-2 border-white ${
              isProfileLoading ? "skeleton" : ""
            }`}
            alt="author-profile"
          />
          <h1 className="text-4xl bedar-sc2:text-5xl font-extrabold text-[#fedf89] my-4 text-center">
            Contact Me
          </h1>
          <div className="text-center mb-4">
            Thank you for visiting my portfolio. For inquiries regarding professional opportunities, collaborations, or further information, please don’t hesitate to contact me.
          </div>
          <div className={LinkStyles}>
            <MdEmail className="w-6 h-6" />{" "}
            <span>{AboutPage.authorContactMail}</span>
          </div>
          <div className={LinkStyles}>
            <FaPhoneAlt className="w-[18px] h-[18px]" />{" "}
            <span>{AboutPage.authorContactNumber}</span>
          </div>
          {/* Social icons removed from Contact section */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
