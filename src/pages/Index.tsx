import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-squid-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center space-x-4">
            <div className="w-16 h-16 bg-squid-pink flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-white"></div>
            </div>
            <div className="w-16 h-16 bg-squid-pink flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="w-16 h-16 bg-squid-pink flex items-center justify-center relative">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">SQUID GAME</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Делайте ставки. Общайтесь с участниками. Выигрывайте призы.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              className="bg-squid-pink hover:bg-squid-pink/90 text-white px-8 py-3 text-lg"
            >
              <Link to="/betting">Сделать ставку</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-squid-black px-8 py-3 text-lg"
            >
              <Link to="/chat">Открыть чат</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 border-2 border-squid-black">
              <div className="text-4xl font-bold text-squid-pink mb-2">456</div>
              <div className="text-squid-gray">Активных участников</div>
            </div>
            <div className="bg-white p-8 border-2 border-squid-black">
              <div className="text-4xl font-bold text-squid-pink mb-2">
                45.6₽
              </div>
              <div className="text-squid-gray">Млрд призовой фонд</div>
            </div>
            <div className="bg-white p-8 border-2 border-squid-black">
              <div className="text-4xl font-bold text-squid-pink mb-2">6</div>
              <div className="text-squid-gray">Игр доступно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-squid-black mb-12">
            Быстрые действия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/games" className="group">
              <div className="bg-white border-2 border-squid-black p-6 group-hover:bg-squid-pink group-hover:text-white transition-colors">
                <div className="text-2xl font-bold mb-2">🎯</div>
                <h3 className="text-xl font-bold mb-2">Игры</h3>
                <p className="text-sm">
                  Посмотрите доступные игры и их правила
                </p>
              </div>
            </Link>

            <Link to="/betting" className="group">
              <div className="bg-white border-2 border-squid-black p-6 group-hover:bg-squid-pink group-hover:text-white transition-colors">
                <div className="text-2xl font-bold mb-2">💰</div>
                <h3 className="text-xl font-bold mb-2">Ставки</h3>
                <p className="text-sm">Делайте ставки на исход игр</p>
              </div>
            </Link>

            <Link to="/chat" className="group">
              <div className="bg-white border-2 border-squid-black p-6 group-hover:bg-squid-pink group-hover:text-white transition-colors">
                <div className="text-2xl font-bold mb-2">💬</div>
                <h3 className="text-xl font-bold mb-2">Чат</h3>
                <p className="text-sm">Общайтесь с другими участниками</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
