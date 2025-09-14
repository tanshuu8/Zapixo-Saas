import { CheckIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals getting started with AI automation.",
      features: [
        "1 AI Agent",
        "Basic Integrations",
        "Email Support",
        "Community Access",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for small teams who want to scale automation fast.",
      features: [
        "5 AI Agents",
        "Advanced Integrations",
        "Priority Email Support",
        "Analytics Dashboard",
      ],
      highlight: true,
    },
    {
      name: "Business",
      price: "$99",
      description: "For growing businesses with high-volume automation needs.",
      features: [
        "Unlimited AI Agents",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Priority Support",
      ],
    },
  ];

  return (
    <div
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #fffbe6, #fef3c7, #fff)`,
      }}
    >
      {/* Light Art Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-[120px] top-[-100px] left-[-100px]"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-[150px] bottom-[-100px] right-[-100px]"></div>
      </div>

      {/* Heading */}
      <h2 className="relative text-4xl md:text-5xl font-extrabold uppercase text-yellow-500 text-center mb-14 tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">
        Flexible Pricing for Every Stage
      </h2>

      {/* Pricing Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 bg-white shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(255,193,7,0.4)] border-t-8 ${
              plan.highlight
                ? "border-yellow-400 shadow-yellow-300/50"
                : "border-yellow-200"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {plan.name}
            </h3>
            <p className="text-4xl font-bold text-yellow-500 mb-4">
              {plan.price}
              <span className="text-lg font-normal text-gray-500">/month</span>
            </p>
            <p className="text-gray-600 mb-6">{plan.description}</p>

            {/* Features */}
            <ul className="mb-6 space-y-3 text-gray-700 font-medium">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-yellow-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-auto w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.highlight
                  ? "bg-yellow-500 text-white hover:bg-yellow-400"
                  : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
