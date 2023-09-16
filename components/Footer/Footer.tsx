import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-secondaryColor">
      <div className="container p-0 pt-20 pb-32 md:pb-20 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col justify-between gap-y-6 sm:gap-y-0 mb-10 sm:m-0">
          <Image
            className="w-[75%] h-auto self-center sm:self-auto sm:h-28 sm:w-auto lg:h-44"
            src="/assets/logo-white.png"
            width={1000}
            height={351}
            alt="White Logo"
          />
          <p className="font-viaodaLibre text-white text-center sm:text-start lg:text-end lg:-mt-6 w-screen sm:w-auto">
            © 2023 Copyright - Shavaine Brown -
            <Link className="ml-1 hover:font-bold" href="/privacy-policy">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex flex-col justify-between text-center sm:text-end font-spaceMono text-md sm:text-xl text-white sm:w-[40%]">
          <p>Made with love 🧡</p>
          <p className="px-2">
            Thank you for visiting! This website was crafted with passion and
            care, from the tiniest details to the overall design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
