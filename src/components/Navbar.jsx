function Navbar() {
  const navbarHeight = 80; // Height of navbar in pixels

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop - navbarHeight; // Precise position
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 shadow-md bg-white z-50">
      {/* Logo */}
      <span
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-[#FFD700] font-extrabold text-xl tracking-widest hover:opacity-80 transition-all cursor-pointer"
      >
        ZAPIXO
      </span>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6 text-[#111] font-semibold text-[15px]">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-yellow-500 transition-all"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("agents")}
            className="hover:text-yellow-500 transition-all"
          >
            Agents
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-yellow-500 transition-all"
          >
            Features
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-yellow-500 transition-all"
          >
            Pricing
          </button>
        </li>

        {/* Login Button */}
        <li>
          <button
            onClick={() => scrollToSection("login")}
            className="border-2 border-yellow-400 text-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-100 transition-all"
          >
            Login
          </button>
        </li>

        {/* Signup Button */}
        <li>
          <button
            onClick={() => scrollToSection("signup")}
            className="bg-yellow-400 text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 transition-all"
          >
            Signup
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
