import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-me-white">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-me-accent transition-all text-me-white"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
