import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your health question..."
        className="flex-1 rounded-full border border-gray-200 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />

      <Button
        size={"icon"}
        type="submit"
        disabled={!message.trim()}
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
}