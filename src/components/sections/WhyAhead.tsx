import Image from "next/image";
import Button from "@/components/ui/Button";
import speedIcon from "@/assets/speed 1.png";
import contractIcon from "@/assets/contract.png";
import anywhereIcon from "@/assets/anywhere.png";
import checkIcon from "@/assets/check.png";

export default function WhyAhead() {
  const features = [
    {
      icon: speedIcon,
      title: "High-speed, no buffering",
      description:
        "Stream, game, and work without limits. Portable, fast, and affordable",
    },
    {
      icon: contractIcon,
      title: "No contracts or hidden fees",
      description:
        "Stream, game, and work without limits. Portable, fast, and affordable",
    },
    {
      icon: anywhereIcon,
      title: "Take your internet anywhere",
      description:
        "Stream, game, and work without limits. Portable, fast, and affordable",
    },
    {
      icon: checkIcon,
      title: "Easy 5-minute self-install",
      description:
        "Stream, game, and work without limits. Portable, fast, and affordable",
    },
  ];

  return (
    <div className=" py-24">
      <div className="container mx-auto px-4">
        {/* Get Started Button */}
        <div className="flex justify-center mb-16">
          <Button variant="primary" size="lg">
            Get started
          </Button>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-medium">
            Why we are ahead of everyone
            <br />
            feature list title
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
