import React, { SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 bg-white flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-y z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/work">
              My Work
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/essays">
              Essays
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/contact">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <nav className="mx-auto hidden lg:flex gap-6">
        <Link
          className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          to="/"
        >
          Home
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          to="/work"
        >
          My Work
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          to="/essays"
        >
          Essays
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}