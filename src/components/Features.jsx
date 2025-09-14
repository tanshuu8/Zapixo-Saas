import React from "react";
import {
  BoltIcon,
  PuzzlePieceIcon,
  AdjustmentsHorizontalIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Lightning Fast",
    description: "Experience blazing-fast performance that saves you time and boosts productivity.",
    icon: BoltIcon
  },
  {
    name: "Seamless Integration",
    description: "Connect with your favorite tools and services without the headaches.",
    icon: PuzzlePieceIcon
  },
  {
    name: "Customizable",
    description: "Tailor everything to match your unique workflow and style.",
    icon: AdjustmentsHorizontalIcon
  },
  {
    name: "Smart Linking",
    description: "Automatically detect and link relevant content for better navigation.",
    icon: LinkIcon
  },
  {
    name: "Live Chat Support",
    description: "Real-time help from our dedicated support team whenever you need it.",
    icon: ChatBubbleLeftRightIcon
  },
  {
    name: "Advanced Analytics",
    description: "Track growth with detailed analytics and actionable insights.",
    icon: ChartBarIcon
  }
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6 lg:px-12">
      {/* Abstract Background Glow Elements */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-yellow-500 opacity-30 rounded-full blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] bg-yellow-400 opacity-20 rounded-full blur-[100px] animate-pulse z-0"></div>

      {/* Section Content */}
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="text-lg font-semibold tracking-wide text-white uppercase sm:text-xl">
          Why Zapixo?
        </h2>
        <p className="mt-4 text-4xl font-extrabold tracking-tight text-yellow-400 sm:text-5xl">
          Powerful Features. Seamless Experience.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Everything you need to scale your business, all in one place.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-yellow-200/5 backdrop-blur-md border border-yellow-100/10 p-8 shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,214,0,0.4)] hover:border-yellow-300"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-300 text-white shadow-md group-hover:scale-110 transition">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">
              {feature.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
