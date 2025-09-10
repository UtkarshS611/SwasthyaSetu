"use client";

import React, { useState } from 'react'

import { getGeminiResponse } from '../../../../lib/gemini';

import { ChatInput } from '@/components/ChatInput/ChatInput';
import { ChatMessage } from '@/components/ChatMessage/ChatMessage';

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

const Page = () => {

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! I'm your personal health assistant. How can I help you today?",
            isBot: true,
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (text: string) => {
        const newMessage: Message = {
            id: messages.length + 1,
            text,
            isBot: false,
        };

        setMessages((prev) => [...prev, newMessage]);
        setIsLoading(true);

        try {
            const response = await getGeminiResponse(text);
            const formattedResponse = response.replace(/\*\*/g, '').trim();

            const botResponse: Message = {
                id: messages.length + 2,
                text: formattedResponse,
                isBot: true,
            };
            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="w-full px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-24">
            <div className='space-y-4 py-4 text-center lg:text-start'>
                <h1 className='text-4xl lg:text-6xl font-semibold flex flex-col'>
                    <span>
                        Something Bothering You Medically?
                    </span>
                    <span>
                        Let AI Handle It.
                    </span>
                </h1>
                <p className='text-sm'>
                    Discuss your health concerns instantly with our AI-driven medical assistant. Get personalized, reliable insights into symptoms, possible conditions, and care recommendations—all in your language. While not a replacement for doctors, this tool empowers you with knowledge, enabling better decisions and guiding you toward the right medical support when needed.
                </p>
            </div>
            <div className="rounded-2xl shadow-lg bg-background dark:border-[2px] dark:border-border">
                <div className="min-h-96 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <ChatMessage
                            key={message.id}
                            isBot={message.isBot}
                            message={message.text}
                        />
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-100 rounded-full px-4 py-2">
                                <div className="animate-pulse flex space-x-2">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="border-t p-4">
                    <ChatInput onSend={handleSendMessage} />
                </div>
            </div>
        </section>
    )
}

export default Page