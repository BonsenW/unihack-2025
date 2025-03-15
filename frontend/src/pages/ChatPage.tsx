import React from "react";
import "./ChatPage.css";  
import { Button } from "@/components/ui/button";

const ChatPage: React.FC = () => {
    return (
        <div className="chatPage">
            <div className='chat-left'>
                <div className='profile-detail'>
                    <h1 id="user-name">Name</h1>
                    <p>Direct Messages</p>
                </div>
            </div>
            <div className='chat-right'>
                <h1>Friend name</h1>
                <p>Description</p>
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