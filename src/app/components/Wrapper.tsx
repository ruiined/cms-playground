import Image from "next/image";
import Link from "next/link";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col justify-center align-middle items-center">
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 p-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 h-20 md:justify-center md:justify-items-center md:align-middle md:items-center">
        <Link href="/">
          <div className="ml-5 responsive flex items-center justify-between w-[650px]">
            <Image
              src="/logo.png"
              alt="Digital Changemakers Demo"
              width="150"
              height="50"
            />
          </div>
        </Link>
      </nav>
      <div className="relative flex flex-col w-full max-w-[650px] mt-14">
        {children}
      </div>
    </div>
  );
};
