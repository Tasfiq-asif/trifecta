import Image from "next/image";
import clickThroughRate from "@/assets/click-through-rate.png";
// Import SVGs as React components
import SetupIcon from "@/assets/setup-in-60.svg";
import EnjoyIcon from "@/assets/enjoy-fast-internet.svg";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      icon: clickThroughRate,
      type: "image",
      title: "Choose a plan",
      description:
        "Select the plan which is best for you. Routers ship within 24 hours",
    },
    {
      step: "Step 2",
      icon: SetupIcon,
      type: "svg",
      title: "Setup in 60 seconds",
      description: "No external antennas or technicians required",
    },
    {
      step: "Step 3",
      icon: EnjoyIcon,
      type: "svg",
      title: "Enjoy fast internet",
      description:
        "Connect your devices and enjoy unlimited streaming, browsing, and gaming",
    },
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center mb-16">How it works</h2>

        <div className="flex justify-between items-start gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-left bg-[#F8F8F8] rounded-[32px] py-12 px-8 w-[365px] h-[331px]"
            >
              <p className="text-sm font-medium mb-8 italic underline decoration-1">
                {step.step}
              </p>
              <div className="relative mb-8 flex">
                {step.type === "image" ? (
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={32}
                    height={32}
                    className="h-12 w-12" // 48px
                  />
                ) : (
                  <div className="w-12 h-12 overflow-hidden">
                    {" "}
                    {/* 48px container */}
                    <step.icon
                      width="12"
                      height="12"
                      className="text-[#0066FF] object-contain"
                      style={{
                        transform: "scale(0.75)", // Scale down to fit
                        transformOrigin: "center",
                      }}
                    />
                  </div>
                )}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-[2px]">
                    <div className="w-full h-full border-t-2 border-dashed border-gray-300" />
                  </div>
                )}
              </div>
              <h3 className="text-[32px] font-normal mb-4">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
