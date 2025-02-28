import Image from "next/image";

import home_internet from "@/assets/home_internet.jpg";
import truckers from "@/assets/truckers.jpeg";
import travel_rv from "@/assets/travle&RV.jpg";

export default function WhoIsItFor() {
  const categories = [
    {
      title: "Home Internet",
      image: home_internet,
      description:
        "Stay Connected for Work, School & Entertainment—Without Contracts",
      learnMoreLink: "#",
    },
    {
      title: "Truckers",
      image: truckers,
      description: "Reliable Internet for Truck Drivers – Anytime, Anywhere",
      learnMoreLink: "#",
    },
    {
      title: "Travel & RV",
      image: travel_rv, // Using the filename provided
      description:
        "Fast, Reliable Internet for life on the go. No Contracts. No Throttling. Just Seamless Connectivity.",
      learnMoreLink: "#",
    },
  ];

  return (
    <div className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-medium text-center mb-4">Who is it for</h2>
        <p className="text-center text-gray-600 mb-16">
          See how our internet solution can help you stay connected
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-[240px] w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-medium mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <a
                  href={category.learnMoreLink}
                  className="block w-full bg-blue-500 text-white text-center py-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
