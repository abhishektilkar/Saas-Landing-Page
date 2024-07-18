import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-blacl text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, itaque? Dignissimos iste modi explicabo vero, sed harum officiis voluptatem beatae.
          </p>
        </div>
        <Image src={appScreen} alt="The product screenshot" className="mt-14 mx-auto" />
      </div>
    </div>
  );
};
