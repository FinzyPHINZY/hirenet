import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center my-4">
        <Link href="/" className="font-bold text-xl">
          HireNet
        </Link>

        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
          <Link href="/login" className="bg-gray-200 ">
            Login
          </Link>
          <Link href="/newlisting" className="bg-blue-600 text-white">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
