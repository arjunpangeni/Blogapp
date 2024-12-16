"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/theme.btn";

const Navbar = () => {
  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center p-3 backdrop-blur shadow-md relative">
      <div className="flex-1 mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <Link href="/" className="text-xl font-bold">
          Arjun's Blog
        </Link>

        {/* Hamburger Button for Mobile */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Arjun's Blog</SheetTitle>
              </SheetHeader>
              <nav>
                <ul className="flex flex-col space-y-4 py-4">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:text-blue-500"
                      href="/about"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:text-blue-500"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:text-blue-500"
                      href="/contact"
                    >
                      Contact Me
                    </Link>
                  </li>
                  <li>
                    <Button className="mx-1" variant="outline">
                      Sign In
                    </Button>
                  </li>
                  <li>
                    <Button className="" variant="outline">
                      Log In
                    </Button>
                  </li>
                  <ModeToggle />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navigation Links for Larger Screens */}
      <div className="hidden md:flex md:items-center md:w-auto w-full">
        <nav>
          <ul className="flex flex-row items-center justify-between text-base space-x-4">
            <li>
              <Link
                className="block md:p-4 py-2 px-6 hover:text-blue-500 rounded md:rounded-none"
                href="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="block md:p-4 py-2 px-6 hover:text-blue-500 rounded md:rounded-none"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block md:p-4 py-2 px-6 hover:text-blue-500 rounded md:rounded-none"
                href="/contact"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <Button className="mx-1 text-blue-800" variant="outline">
                Sign In
              </Button>
            </li>
            <li>
              <Button className="text-blue-800" variant="outline">
                Log In
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
