import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondaryColor">
      <div className="container p-0 py-20 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col justify-between gap-y-6 sm:gap-y-0 mb-10 sm:m-0">
          <Image
            className="w-auto h-auto sm:h-28 lg:h-44"
            src="/assets/logo-white.png"
            width={1000}
            height={351}
            alt="White Logo"
          />
          <p className="font-viaodaLibre text-white text-center sm:text-start lg:text-end lg:-mt-6 w-screen sm:w-auto">
            © 2023 Copyright - Shavaine Brown
          </p>
        </div>

        <div className="flex flex-col justify-between text-center sm:text-end font-spaceMono text-xl text-white sm:w-[40%]">
          <p>Made with love 🧡</p>
          <p>
            Thank you for visiting! This website was crafted with passion and
            care, from the tiniest details to the overall design.
          </p>
        </div>
      </div>
    </footer>
  );
}
