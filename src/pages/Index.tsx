import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Добро пожаловать!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Перейдите на наш сайт для получения дополнительной информации
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#f7418f] hover:bg-[#e63780] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
        >
          <a href="/betting" className="flex items-center gap-2">
            <Icon name="GamepadIcon" size={20} />
            Играть в Кальмар
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
