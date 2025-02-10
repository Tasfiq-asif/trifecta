import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 pt-12">
      <div className="flex items-center justify-between gap-12">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col items-center text-center">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-[#FFB800] text-2xl">
                  ★
                </span>
              ))}
              <span className="text-[#FFB800] text-2xl">★</span>
            </div>
            <p className="text-sm text-gray-600">
              Rated <span className="font-medium">4.5</span> by{" "}
              <span className="font-medium">275+</span> customers at Google
              reviews
            </p>
          </div>

          {/* Hero Text */}
          <h1 className="text-6xl font-medium mb-6 leading-tight">
            Reliable Internet.
            <br />
            Anywhere.
            <br />
            No Contracts.
          </h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Stream, game, and work without limits. Portable, fast and
            affordable.
          </p>

          {/* Address Input */}
          <div className="w-full max-w-lg">
            <h2 className="text-left text-lg font-medium mb-4">
              Check availability
            </h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Type & select an address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#171717"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="#171717"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <Button fullWidth size="lg">
              Explore Plans
            </Button>
            <p className="text-sm text-accent mt-3">
              Plan starts at $99.95 per month
            </p>
          </div>
        </div>

        {/* Router Image */}
        <div className="flex-1 relative h-[800px]">
          <Image
            src="/hero.avif"
            alt="Hero Image"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
