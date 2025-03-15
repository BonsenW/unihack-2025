import React from "react";
import "./ChatPage.css";  
import { Button } from "@/components/ui/button";

const ChatPage: React.FC = () => {
    return (
        <div>
            <div className='chat-left'></div>
            <div className='chat-right'>
                <h1>Hello, React with TypeScript!</h1>
                <div className="msg-container">
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