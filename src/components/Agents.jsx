import { useEffect } from "react";

function Agents() {
  const agents = [
    {
      title: "Task Automator",
      description: "Save hours by letting AI handle repetitive workflows — from data entry to process scheduling.",
    },
    {
      title: "Customer Support AI",
      description: "Provide instant, smart, and friendly 24/7 customer service without missing a single query.",
    },
    {
      title: "Outreach DM Agent",
      description: "Send personalized messages to leads automatically and build connections at scale.",
    },
    {
      title: "Content Generator Agent",
      description: "Create blogs, captions, ad copies, and more — in seconds, ready to publish.",
    },
    {
      title: "Email Reply Agent",
      description: "Respond to emails with polished, professional replies in just one click.",
    },
    {
      title: "Meeting Notes AI",
      description: "Get accurate meeting summaries, key points, and action items instantly.",
    },
  ];

  const customAgent = {
    title: "Your Idea → Your Agent",
    description: "Have a unique workflow in mind? Let’s turn it into your own custom AI agent.",
  };

  // Entry animation on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".agent-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section
      id="agents"
      className="relative overflow-hidden py-24 px-6 text-center bg-white"
    >
      {/* Yellow glowing blobs for abstract art */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-[#FFD600] opacity-20 rounded-full blur-[140px] z-0 animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#FFD600] opacity-25 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute top-[30%] right-[20%] w-[200px] h-[200px] bg-[#fff3b0] opacity-20 rounded-full blur-[90px] z-0 animate-pulse-slow" />

      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold text-black mb-6 tracking-tight leading-tight drop-shadow-sm">
          Meet the Agents
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 font-medium mb-16 text-lg">
          Whether it's content, automation, support or something unique —{" "}
          <span className="text-[#FFD600] font-semibold">Zapixo</span> has an AI agent for you.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="agent-card group p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-yellow-100 shadow-xl shadow-yellow-200 hover:shadow-[0_0_60px_rgba(255,214,0,0.35)] transform hover:-translate-y-3 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-[#FFD600] mb-3 group-hover:text-[#e6c800] transition-colors">
                {agent.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{agent.description}</p>
            </div>
          ))}

          {/* Custom Agent CTA */}
          <div className="col-span-full lg:col-start-2 lg:col-end-3">
            <div className="agent-card p-8 rounded-3xl bg-white border-2 border-dashed border-[#FFD600] shadow-lg hover:shadow-[0_0_60px_rgba(255,214,0,0.45)] transition-transform transform hover:-translate-y-3 backdrop-blur-md duration-300">
              <h3 className="text-xl font-semibold text-[#FFD600] mb-3">
                {customAgent.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                {customAgent.description}
              </p>
              <button className="px-6 py-2 bg-[#FFD600] text-black font-medium rounded-full hover:bg-[#e6c800] transition">
                Build Your Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract yellow wave at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none z-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FFD600"
          d="M0,96L40,122.7C80,149,160,203,240,202.7C320,203,400,149,480,133.3C560,117,640,139,720,144C800,149,880,139,960,154.7C1040,171,1120,213,1200,229.3C1280,245,1360,235,1400,229.3L1440,224V320H0Z"
        />
      </svg>
    </section>
  );
}

export default Agents;
