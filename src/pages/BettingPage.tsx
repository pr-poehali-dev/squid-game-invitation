import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";

const BettingPage = () => {
  const games = [
    {
      title: "Красный свет, зелёный свет",
      description: "Классическая детская игра с смертельными последствиями",
      minBet: 1000,
      maxBet: 100000,
      participants: 156,
      status: "active" as const,
      shape: "square" as const,
    },
    {
      title: "Дальгона",
      description: "Вырежьте фигуру из сахарной карамели",
      minBet: 500,
      maxBet: 50000,
      participants: 89,
      status: "waiting" as const,
      shape: "circle" as const,
    },
    {
      title: "Перетягивание каната",
      description: "Командная игра на выживание",
      minBet: 2000,
      maxBet: 200000,
      participants: 45,
      status: "waiting" as const,
      shape: "triangle" as const,
    },
    {
      title: "Игра в шарики",
      description: "Партнёрская игра с шариками",
      minBet: 1500,
      maxBet: 150000,
      participants: 67,
      status: "completed" as const,
      shape: "square" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-squid-black mb-2">
            Система ставок
          </h1>
          <p className="text-squid-gray">
            Выберите игру и сделайте ставку на победителя
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-squid-black text-white p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">Ваш баланс</h3>
              <div className="text-3xl font-bold">250,000 ₽</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-300">Активных ставок</div>
              <div className="text-xl font-bold">3</div>
            </div>
          </div>
        </div>

        {/* Active Bets */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-squid-black mb-4">
            Ваши активные ставки
          </h2>
          <div className="bg-white border border-gray-200 divide-y">
            <div className="p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">Красный свет, зелёный свет</div>
                <div className="text-sm text-gray-500">
                  Ставка на участника #067
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">15,000 ₽</div>
                <div className="text-sm text-green-600">
                  Потенциальный выигрыш: 45,000 ₽
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">Дальгона</div>
                <div className="text-sm text-gray-500">
                  Ставка на участника #218
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">8,000 ₽</div>
                <div className="text-sm text-green-600">
                  Потенциальный выигрыш: 24,000 ₽
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Games */}
        <div>
          <h2 className="text-xl font-bold text-squid-black mb-4">
            Доступные игры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingPage;
