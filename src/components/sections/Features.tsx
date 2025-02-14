import InfinityIcon from "@/assets/Infinity.svg";
import FeesIcon from "@/assets/fees.svg";
import PaperIcon from "@/assets/paper.svg";

export default function Features() {
  const features = [
    {
      icon: <InfinityIcon />,
      title: "Unlimited Data",
      description:
        "Our internet is truly unlimited, so you can stream, browse, and game to your hearts content",
    },
    {
      icon: <FeesIcon />,
      title: "100% money-back guarantee",
      description:
        "You get to try our internet for 14 days, and if you don't love it, we'll refund all your money",
    },
    {
      icon: <PaperIcon />,
      title: "High-speed with no buffering",
      description:
        "You can enjoy all your online activities with speeds up to 200+ mbps",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <hr className="border-t border-gray-400 my-20" />
        <div className="h-[224px] grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-left gap-3 justify-center text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-4xl font-medium mb-2 text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 w-[70%]">{feature.description}</p>
            </div>
          ))}
        </div>
        <hr className="border-t border-gray-400 my-20" />
      </div>
    </div>
  );
}
