import logo1 from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col md:flex-row gap-2 items-center">
      <img
        className="w-20"
        src={logo1}
        alt="logo"
        height="100"
        width="100"
      />
      <div className=" hidden md:block text-center font-bold -space-y-1 text-lg">
        <p className="text-my-primary "> KBM Computer</p>{" "}
        <p className="text-my-accent ">Store</p>
      </div>
    </Link>
  );
};

export default Logo;
