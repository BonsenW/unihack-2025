import React, { useEffect, useRef, useState } from "react";
import "./ChatPage.css";  
import { Button } from "@/components/ui/button";

import taylaPic from "../assets/tayla.jpg";
import gregPic from "../assets/greg.jpg";
import johnnyPic from "../assets/johnny.jpg";

const ChatPage: React.FC = () => {

    const [ selectedChat, setSelectedChat ] = useState<string>("tayla");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Auto-scroll to the latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedChat]); // Runs when messages update

    const chats = [
        { name: "tayla", message: "we can go to dinner at 7pm if you w...", description: "food, vibes, culture", profilePic: taylaPic},
        { name: "greg", message: "i live near huntingdale, do you think...", description: "do you wanna build a snowman", profilePic: gregPic},
        { name: "tayla, greg, johnny", message: "living far from campus right now...", description: "the uh huh gang"},
        { name: "johnny", message: "cool ill set up a group chat...", description: "hello hello", profilePic: johnnyPic},
    ];

    // Messages for each chat
    const messages: Record<string, { sender: string; text: string }[]> = {
        tayla: [
            { sender: "system", text: "YOU AND TAYLA ARE A MATCH!" },
            { sender: "system", text: "SATURDAY, 20 MARCH 2025" },
            { sender: "user", text: "hey tayla, what were u trying to ask yesterday, asking now before i forget XD" },
            { sender: "tayla", text: "yea so whats the policy on pets, im babysitting my girlfriends mums boyfriends snake rn" },
            { sender: "user", text: "could we meet up to discuss this actually?" },
            { sender: "tayla", text: "we can go to dinner at 7pm if you want?" },
        ],
        greg: [
            { sender: "system", text: "YOU AND GREG ARE A MATCH!" },
            { sender: "system", text: "SATURDAY, 18 MARCH 2025" },
            { sender: "greg", text: "i live near huntingdale, do you think we could move around that area?" },
        ],
        "tayla, greg, johnny": [
            { sender: "system", text: "SATURDAY, 18 MARCH 2025" },
            { sender: "tayla", text: "yolo...." },
            { sender: "greg", text: "are u like 30yr old?" },
            { sender: "tayla", text: "i vote greg should be kicked" },
            { sender: "greg", text: "what no" },
            { sender: "johnny", text: "lol what is going on" },
            { sender: "user", text: "hey guys so i talked to the rental agent and she says she can only give us a 6-month lease" },
            { sender: "johnny", text: "wait seriously" },
            { sender: "tayla", text: "oh i mean...i can do 6 months but preferably 12 months if possible" },
            { sender: "greg", text: "do u think we could negotiate for a longer contract? did she say why it was only 6 months?" },
            { sender: "greg", text: "living far from campus right now so..." },
        ],
        johnny: [
            { sender: "system", text: "YOU AND JOHNNY ARE A MATCH!" },
            { sender: "system", text: "SATURDAY, 15 MARCH 2025" },
            { sender: "johnny", text: "sorry i missed ur call, im totally down to meet up with tohers" },
            { sender: "user", text: "cool ill set up a group chat then" },
        ],
    };

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
                    <p id="direct-msg" className="small-text">Direct Messages</p>
                </div>
                <div className='chat-list'>
                    {chats.map((chat, index) => (
                        <div
                            key={index}
                            className={`chat-option ${selectedChat === chat.name ? 'bg-blue-300' : ''} p-2 cursor-pointer`}
                            onClick={() => handleChatSelect(chat.name)}
                        >
                            <div className="chat-option-content">
                                {chat.profilePic && (
                                    <img 
                                        src={chat.profilePic} 
                                        alt={chat.name} 
                                        className="chat-profile-pic" 
                                    />
                                )}
                                <div className="chat-text">
                                    <p>{chat.name}</p>
                                    <p className="small-text">{chat.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='chat-right'>
                <div className='friend-detail'>
                    <h1>{selectedChat}</h1>
                    <p className="small-text">{selectedChatData ? selectedChatData.description : 'Fill me in!'}</p>
                </div>
                <div className="msg-container">

                    <div className="message-list small-text">
                        {messages[selectedChat]?.map((msg, index) => (
                            msg.sender === "system" ? (
                                <div key={index} className="match-info small-text">
                                    {msg.text.includes("MATCH") && (
                                        <p id="match-declaration">{msg.text}</p>
                                    )}
                                    {msg.text.includes("MARCH") && (
                                        <p id="message-date">{msg.text}</p>
                                    )}
                                </div>
                            ) : (
                                <div key={index} className={`message-container ${msg.sender === "user" ? "user" : msg.sender}`}>
                                    {msg.sender !== "user" && (
                                        <img 
                                            src={chats.find(chat => chat.name === msg.sender)?.profilePic} 
                                            alt={msg.sender} 
                                            className="profile-pic" 
                                        />
                                    )}
                                    <p className={`message ${msg.sender === "user" ? "user" : msg.sender}`}>
                                        {msg.text}
                                    </p>
                                </div>
                            )
                        ))}

                        {/* Scroll automatically to the bottom */}
                        <div ref={messagesEndRef}></div>
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