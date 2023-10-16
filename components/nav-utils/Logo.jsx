import logo1 from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col md:flex-row gap-2 items-center">
      <Image
        className="w-20"
        src={logo1}
        alt="logo"
      />
      <div className=" hidden md:block text-center font-bold -space-y-1 text-lg">
        <p className="text-my-primary "> KBM Computer</p>{" "}
        <p className="text-my-accent ">Store</p>
      </div>
    </Link>
  );
};

export default Logo;
