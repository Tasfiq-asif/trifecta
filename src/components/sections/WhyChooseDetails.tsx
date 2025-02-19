import Image from "next/image";

export default function WhyChooseDetails() {
  const features = [
    {
      title: "Reliable Coverage Where Others Fall Short",
      description:
        "Unlike major providers who overlook rural areas, Trifecta Wireless is built for you. We leverage America's largest cellular networks and strategically placed towers to bring fast, consistent internet—even where cable and DSL won't go.",
    },
    {
      title: "Streaming & Work-Ready Speeds",
      description:
        "Buffering and slow connections shouldn't be part of rural life. Our high-speed 4G LTE plans support streaming, video calls, and work-from-home needs—so you can stay connected without compromise.",
    },
    {
      title: "A Risk-Free Experience",
      description:
        "We believe in our service, and we back it up. Try Trifecta Wireless with confidence thanks to our money-back guarantee. If it's not the right fit, you won't pay a dime.",
    },
  ];

  return (
    <div className="bg-[#EEEEEE] pb-24">
      <div className="container mx-auto px-4">
        <div className="flex gap-12">
          {/* Image Section */}
          <div className="flex-1 relative h-[850px]">
            <Image
              src="/why_choose.avif"
              alt="Woman using laptop with router"
              fill
              className="rounded-3xl object-cover"
              priority
            />
          </div>

          {/* Features Section */}
          <div className="flex-1 flex flex-col gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#EAEAEA] border border-[#D9D9D9] rounded-3xl p-8 h-[250px]"
              >
                <h3 className="text-4xl font-medium mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
