import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { brand, socials } from "@/data/globalVariables";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <Link to="#">
          <div className="flex items-center gap-3">
            <span className="text-primary text-[18px] font-semibold">
              {brand.name}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{" "}
          <a href="/" className="hover:underline">
            AirLinePro
          </a>
          , Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
