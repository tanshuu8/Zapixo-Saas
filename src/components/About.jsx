import React from "react";
import {
  FaBolt,
  FaKey,
  FaWrench,
  FaMoneyBillWave,
  FaMousePointer,
} from "react-icons/fa";

const features = [
  { icon: <FaKey />, text: "free access agent – use your own openai or gemini key" },
  { icon: <FaBolt />, text: "premium agents – bots for outreach, content, workflows" },
  { icon: <FaWrench />, text: "custom agent requests – delivered in 2–4 days" },
  { icon: <FaMoneyBillWave />, text: "simple pay-as-you-go pricing – no monthly bloat" },
  { icon: <FaMousePointer />, text: "zero-code interface – no tech experience needed" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 py-24 px-6 md:px-20 text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold lowercase drop-shadow-md">
            what is zapixo?
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-white/90">
            your personal ai agent hub — ready, smart & custom-made.
          </p>
          <p className="text-md text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
            zapixo is a next-gen ai agent platform built for creators,
            entrepreneurs, and small businesses who want powerful automation
            without the tech struggle. we offer in-built, ready-to-use ai
            agents that solve real problems — from content to client outreach —
            instantly.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "one agent is free forever with your api key",
            "unlock 5+ premium agents that save you hours weekly",
            "custom ai agents delivered in 2–4 days on request",
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-zapGray/30 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              <p className="text-black text-sm font-medium lowercase">{text}</p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 lowercase">
            features at a glance:
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-zapGray/30 hover:scale-[1.02] transition-all duration-300 shadow-md"
              >
                <div className="text-black text-lg mt-1">{item.icon}</div>
                <p className="text-sm text-black font-medium lowercase">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Zapixo */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3 lowercase text-white">
            why zapixo?
          </h3>
          <p className="text-white/80 text-md max-w-3xl mx-auto font-medium leading-relaxed">
            because ai shouldn't be complicated or expensive. zapixo bridges the
            gap between tech and people — offering smart tools with zero fluff.
            whether you're building a personal brand or running a business,
            zapixo gives you ai power on demand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
