interface ChatMessageProps {
  author: string;
  message: string;
  time: string;
  isOwn?: boolean;
}

const ChatMessage = ({
  author,
  message,
  time,
  isOwn = false,
}: ChatMessageProps) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 ${
          isOwn ? "bg-squid-pink text-white" : "bg-gray-100 text-squid-black"
        }`}
      >
        {!isOwn && (
          <div className="text-xs font-medium mb-1 text-squid-gray">
            {author}
          </div>
        )}
        <div className="text-sm">{message}</div>
        <div
          className={`text-xs mt-1 ${
            isOwn ? "text-pink-100" : "text-gray-500"
          }`}
        >
          {time}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
