import Navigation from "@/components/Navigation";
import ChatMessage from "@/components/ChatMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ChatPage = () => {
  const [newMessage, setNewMessage] = useState("");

  const messages = [
    {
      author: "Участник #067",
      message: "Кто-нибудь знает, когда начнется следующая игра?",
      time: "14:23",
      isOwn: false,
    },
    {
      author: "Участник #218",
      message: "Говорят через час. Все готовы?",
      time: "14:25",
      isOwn: false,
    },
    {
      author: "Вы",
      message: "Да, уже сделал ставку на красный свет, зелёный свет",
      time: "14:26",
      isOwn: true,
    },
    {
      author: "Участник #456",
      message: "Удачи всем! Помните - главное выжить",
      time: "14:28",
      isOwn: false,
    },
    {
      author: "Участник #001",
      message: "Интересно, сколько из нас дойдет до финала...",
      time: "14:30",
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Здесь будет логика отправки сообщения
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-squid-black mb-2">
            Чат участников
          </h1>
          <p className="text-squid-gray">Общайтесь с другими игроками</p>
        </div>

        {/* Chat Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-squid-pink">456</div>
            <div className="text-sm text-gray-500">Участников онлайн</div>
          </div>
          <div className="bg-white p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-squid-pink">1,247</div>
            <div className="text-sm text-gray-500">Сообщений сегодня</div>
          </div>
          <div className="bg-white p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-squid-pink">23</div>
            <div className="text-sm text-gray-500">Активных обсуждений</div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white border border-gray-200 h-96 flex flex-col">
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Введите сообщение..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-squid-pink hover:bg-squid-pink/90"
              >
                Отправить
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Rules */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4">
          <h3 className="font-bold text-yellow-800 mb-2">Правила чата:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Запрещены оскорбления и угрозы</li>
            <li>• Не раскрывайте личную информацию</li>
            <li>• Обсуждение стратегий игр разрешено</li>
            <li>• Модераторы следят за соблюдением правил</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
