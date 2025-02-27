import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Vanessa Willis",
    avatar: "/avatar-1.png", // Replace with actual avatar paths
    review:
      "We changed to Trifecta Wireless so we would have better internet in our rural area. We've been extremely pleased with the service.",
    rating: 5,
    readMoreLink: "#",
  },
  {
    name: "Loxi Anne",
    avatar: "/avatar-2.png",
    review: "Excellent internet service in our very rural area!",
    rating: 5,
    readMoreLink: "#",
  },
  {
    name: "Brandy Heyden",
    avatar: "/avatar-3.png",
    review:
      "It would be 5 stars across the board, the only complaint I have is with customer service response time.",
    rating: 4,
    readMoreLink: "#",
  },
  {
    name: "Karen Patterson",
    avatar: "/avatar-4.png",
    review:
      "Living in a rural area it's hard to find internet that doesn't drop. I work from home and need reliable service.",
    rating: 4,
    readMoreLink: "#",
  },
  {
    name: "Tad Meeker",
    avatar: "/avatar-5.png",
    review:
      "Trifecta wireless works way better than the satellite that was trice as expensive and much less reliable.",
    rating: 5,
    readMoreLink: "#",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-medium text-center mb-4">
          What our customers say
        </h2>
        <p className="text-center text-gray-600 mb-16">
          See why thousands of people have chosen Trifecta Wireless
        </p>

        {/* Desktop View - Show all 5 testimonials */}
        <div className="hidden md:flex justify-between space-x-4 mb-8 relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white rounded-full p-2 shadow-md z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-1 bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-3">
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">{testimonial.name}</h3>
                  <div className="flex items-center text-xs">
                    <span>Posted on</span>
                    <Image
                      src="/google-logo.png"
                      alt="Google"
                      width={60}
                      height={20}
                      className="ml-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-2">{testimonial.review}</p>
              <a
                href={testimonial.readMoreLink}
                className="text-blue-500 text-sm hover:underline"
              >
                Read more
              </a>
            </div>
          ))}

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white rounded-full p-2 shadow-md z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile View - Show single testimonial with navigation */}
        <div className="md:hidden">
          <div className="flex justify-center items-center">
            <button onClick={prevSlide} className="p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="bg-white p-6 rounded-lg shadow-lg mx-4">
              <div className="flex items-center mb-3">
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">
                    {testimonials[activeIndex].name}
                  </h3>
                  <div className="flex items-center text-xs">
                    <span>Posted on</span>
                    <Image
                      src="/google-logo.png"
                      alt="Google"
                      width={60}
                      height={20}
                      className="ml-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonials[activeIndex].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-2">
                {testimonials[activeIndex].review}
              </p>
              <a
                href={testimonials[activeIndex].readMoreLink}
                className="text-blue-500 text-sm hover:underline"
              >
                Read more
              </a>
            </div>

            <button onClick={nextSlide} className="p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
