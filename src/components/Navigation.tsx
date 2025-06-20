import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/games", label: "Игры" },
    { path: "/betting", label: "Ставки" },
    { path: "/chat", label: "Чат" },
    { path: "/prizes", label: "Призы" },
    { path: "/leaderboard", label: "Рейтинг" },
  ];

  return (
    <nav className="bg-squid-black border-b border-squid-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-squid-pink flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white"></div>
            </div>
            <span className="text-white font-bold text-xl">SQUID GAME</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-squid-pink border-b-2 border-squid-pink"
                      : "text-gray-300 hover:text-white hover:bg-squid-gray"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <div className="w-6 h-1 bg-current mb-1"></div>
              <div className="w-6 h-1 bg-current mb-1"></div>
              <div className="w-6 h-1 bg-current"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
