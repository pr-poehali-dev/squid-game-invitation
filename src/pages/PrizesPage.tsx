import Navigation from "@/components/Navigation";
import PrizeCard from "@/components/PrizeCard";

const PrizesPage = () => {
  const prizes = [
    {
      place: 1,
      prize: "45.6 миллиарда ₽",
      description: "Главный приз для единственного победителя всех игр",
      claimed: false,
    },
    {
      place: 2,
      prize: "5 миллионов ₽",
      description:
        "Приз за второе место (если останется более одного участника)",
      claimed: false,
    },
    {
      place: 3,
      prize: "1 миллион ₽",
      description: "Приз за третье место",
      claimed: false,
    },
    {
      place: 4,
      prize: "500,000 ₽",
      description: "Специальный приз за лучшую стратегию",
      claimed: true,
    },
    {
      place: 5,
      prize: "100,000 ₽",
      description: "Приз за самую активную игру в чате",
      claimed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-squid-black mb-2">
            Призовой фонд
          </h1>
          <p className="text-squid-gray">Награды для победителей игр</p>
        </div>

        {/* Total Prize Pool */}
        <div className="bg-squid-black text-white p-8 mb-8 text-center">
          <h2 className="text-2xl font-medium mb-4">Общий призовой фонд</h2>
          <div className="text-6xl font-bold text-squid-pink mb-4">45.6₽</div>
          <div className="text-2xl">миллиарда рублей</div>
          <div className="mt-4 text-gray-300">
            Сформирован из взносов всех участников
          </div>
        </div>

        {/* Prize Distribution */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-squid-black mb-4">
            Распределение призов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <PrizeCard key={index} {...prize} />
            ))}
          </div>
        </div>

        {/* Prize Rules */}
        <div className="bg-white border-2 border-squid-black p-6">
          <h3 className="text-xl font-bold text-squid-black mb-4">
            Правила получения призов
          </h3>
          <div className="space-y-4 text-squid-gray">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-squid-pink text-white text-sm flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <strong>Главный приз</strong> получает единственный выживший
                участник, прошедший все игры
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-squid-pink text-white text-sm flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <strong>Дополнительные призы</strong> распределяются среди
                участников по результатам отдельных игр
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-squid-pink text-white text-sm flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <strong>Призы за активность</strong> могут быть присуждены за
                участие в чате и помощь другим игрокам
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-squid-pink text-white text-sm flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <strong>Все призы</strong> выплачиваются в течение 24 часов
                после завершения игр
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesPage;
