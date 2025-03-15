import React, { useState } from "react";
import "./ChatPage.css";  
import { Button } from "@/components/ui/button";

const ChatPage: React.FC = () => {

    const [ selectedChat, setSelectedChat ] = useState<string>("tayla");

    const chats = [
        { name: "tayla", message: "we can go to dinner at 7pm if you w...", description: "food, vibes, culture"},
        { name: "greg", message: "i live near huntingdale, do you think...", description: "do you wanna build a snowman"},
        { name: "tayla, greg, johnny", message: "living far from campus right now...", description: "the uh huh gang"},
    ];

    const handleChatSelect = (chatName: string) => {
        setSelectedChat(chatName)
    };

    // Find selected chat object from chats array
    const selectedChatData = chats.find(chat => chat.name === selectedChat);

    return (
        <div className="chatPage">
            <div className='chat-left'>
                <div className='profile-detail'>
                    <h1>Name</h1>
                    <p id="direct-msg">Direct Messages</p>
                </div>
                <div className='chat-list'>
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            className={`chat-option ${selectedChat === chat.name ? 'bg-blue-300' : ''} p-2 cursor-pointer`}
                            onClick={() => handleChatSelect(chat.name)}
                        >
                            <p>{chat.name}</p>
                            <p>{chat.message}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='chat-right'>
                <div className='friend-detail'>
                    <h1>{selectedChat}</h1>
                    <p>{selectedChatData ? selectedChatData.description : 'Fill me in!'}</p>
                </div>
                <div className="msg-container">
                    <div className="messages">
                        <p>Messages will appear here...really it will, no im not just stalling for time</p> 
                    </div>
                    <form className="send-container">
                        <input type="text" id="message-input"></input>
                        <Button type="submit" id="send-button">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;