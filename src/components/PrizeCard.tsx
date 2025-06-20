interface PrizeCardProps {
  place: number;
  prize: string;
  description: string;
  claimed?: boolean;
}

const PrizeCard = ({
  place,
  prize,
  description,
  claimed = false,
}: PrizeCardProps) => {
  const getPlaceColor = () => {
    switch (place) {
      case 1:
        return "bg-yellow-500";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-orange-600";
      default:
        return "bg-squid-gray";
    }
  };

  return (
    <div
      className={`border-2 p-6 ${claimed ? "bg-gray-50 opacity-75" : "bg-white"} transition-all hover:shadow-md`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 ${getPlaceColor()} text-white font-bold text-xl flex items-center justify-center`}
        >
          {place}
        </div>
        {claimed && (
          <span className="text-sm text-green-600 font-medium">Получен</span>
        )}
      </div>

      <h3 className="text-2xl font-bold text-squid-black mb-2">{prize}</h3>
      <p className="text-squid-gray">{description}</p>
    </div>
  );
};

export default PrizeCard;
