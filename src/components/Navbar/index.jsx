import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-me-primary">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <Link href="/" className="font-bold text-me-white text-4xl ">
          BRAVE
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
