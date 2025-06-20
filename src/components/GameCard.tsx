import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  minBet: number;
  maxBet: number;
  participants: number;
  status: "waiting" | "active" | "completed";
  shape: "square" | "circle" | "triangle";
}

const GameCard = ({
  title,
  description,
  minBet,
  maxBet,
  participants,
  status,
  shape,
}: GameCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "waiting":
        return "text-yellow-500";
      case "active":
        return "text-green-500";
      case "completed":
        return "text-gray-500";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "waiting":
        return "Ожидание";
      case "active":
        return "Активна";
      case "completed":
        return "Завершена";
    }
  };

  return (
    <div className="bg-white border-2 border-squid-black p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`geometric-shape ${shape} w-8 h-8`}></div>
        <span className={`text-sm font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </span>
      </div>

      <h3 className="text-xl font-bold text-squid-black mb-2">{title}</h3>
      <p className="text-squid-gray mb-4">{description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span>Минимальная ставка:</span>
          <span className="font-bold">{minBet.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Максимальная ставка:</span>
          <span className="font-bold">{maxBet.toLocaleString()} ₽</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Участников:</span>
          <span className="font-bold">{participants}</span>
        </div>
      </div>

      <Button
        className="w-full bg-squid-pink hover:bg-squid-pink/90 text-white font-medium"
        disabled={status === "completed"}
      >
        {status === "completed" ? "Игра завершена" : "Сделать ставку"}
      </Button>
    </div>
  );
};

export default GameCard;
