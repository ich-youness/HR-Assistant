export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-chat-bot-bg px-4 py-3 rounded-2xl rounded-bl-sm shadow-soft">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-hr-text-light rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-hr-text-light rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-hr-text-light rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};