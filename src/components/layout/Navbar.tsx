import Link from "next/link";
import Button from "../ui/Button";
import { UserIcon, RouterIcon, Logo } from "../icons";

export default function Navbar() {
  return (
    <div className="sticky top-6 w-full px-4 py-2 z-50">
      <nav className="mx-auto max-w-navbar h-16 bg-navbg/70 backdrop-blur-md rounded-[32px] px-6 flex items-center justify-between border border-white/10">
        {/* Left links */}
        <div className="flex items-center">
          <Link
            href="#"
            className="text-base hover:text-accent transition-colors"
          >
            Family
          </Link>
          <div className="h-4 w-[1px] mx-6 border-l border-dotted border-gray-400" />
          <Link
            href="#"
            className="text-base hover:text-accent transition-colors"
          >
            Nomad
          </Link>
          <div className="h-4 w-[1px] mx-6 border-l border-dotted border-gray-400" />
          <Link
            href="#"
            className="text-base hover:text-accent transition-colors"
          >
            Trucker
          </Link>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-base hover:text-accent transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-base hover:text-accent transition-colors"
          >
            FAQ
          </Link>

          <Button
            variant="secondary"
            icon={<UserIcon />}
            className="bg-transparent"
          >
            Log In
          </Button>

          <Button icon={<RouterIcon />}>Order now</Button>
        </div>
      </nav>
    </div>
  );
}
