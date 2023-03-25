// This file defines the Chatbot component, which is a chat interface that allows users to communicate with an AI-powered assistant called Frank.
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs'; // Importing an icon from the react-icons/bs library
import { IoClose, IoChevronDown, IoChevronUp, IoExpand } from 'react-icons/io5'; // Importing icons from the react-icons/io5 library
import styled from '@emotion/styled'; // Importing a styled-component library
import { motion, AnimatePresence } from 'framer-motion'; // Importing animation libraries
import axios from 'axios';

// Defining the Chatbot component
const Chatbot = () => {

  // Defining the component's state variables
  const [chatSize, setChatSize] = useState('small');
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageListRef = useRef(null);

  // A function that scrolls the message list to the bottom whenever new messages are added
  const scrollToBottom = () => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  };

  // Adding an effect hook that scrolls the message list to the bottom every time a new message is added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // A function that toggles the minimized state of the chatbot component
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // A function that toggles the size of the chatbot component between small and medium
  const handleResize = () => {
    if (chatSize === 'small') {
      setChatSize('medium');
    } else if (chatSize === 'medium') {
      setChatSize('small');
    }
  };

  // A function that toggles the size of the chatbot component between medium and maximized
  const handleMaximize = () => {
    if (chatSize === 'small' || chatSize === 'medium') {
      setChatSize('maximized');
    } else {
      setChatSize('medium');
    }
  };

  // A function that adds a message to the messages state variable with a given content and role
  const sendMessage = async (content, role) => {
    setMessages((messages) => [...messages, { content, role }]);
  };

  // A function that updates the userInput state variable based on user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };


  const chatWithFrank = useCallback(async (messages) => {
    try {
      const response = await axios.post('/api/chatWithFrank', { messages });
      return response.data.response;
    } catch (error) {
      console.error('Error communicating with the serverless function:', error);
      return 'You killed Frank, you monster!';
    }
  }, []);


  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      if (userInput.trim() === '') return; // If the user input is empty or just whitespace, do nothing

      sendMessage(userInput, 'user'); // Add the user's input as a new message with the role of 'user'
      setUserInput(''); // Clear the user input state variable
      setIsTyping(true); // Set the isTyping state variable to true

      const response = await chatWithFrank([
        ...messages,
        { role: 'user', content: userInput },
      ]); // Use the chatWithFrank function to generate a response to the user's input

      setIsTyping(false); // Set the isTyping state variable to false
      sendMessage(response, 'assistant'); // Add the generated response as a new message with the role of 'assistant'
    },
    [userInput, messages, chatWithFrank]
  );

  // Define a new component called Message that takes a message object as a prop
  const Message = ({ message }) => (
    <MessageWrapper user={message.role === 'user'}>
      <MessageContent user={message.role === 'user'}>{message.content}</MessageContent>
    </MessageWrapper>
  );

  // Return the Chatbot component
  return (
    <AnimatePresence>
      {isMinimized ? (
        // If the chatbot is minimized, render the MinimizedChatbot component
        <MinimizedChatbot
          key="minimized"
          onClick={handleMinimize}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <BsFillChatDotsFill size={30} />
        </MinimizedChatbot>
      ) : (
        // Otherwise, render the ChatContainer component with all of its child components
        <ChatContainer
          key="opened"
          size={chatSize}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Header>
            <ButtonContainer>
              <ControlButton onClick={handleMinimize} red>
                <IoClose size={14} />
              </ControlButton>
              <ControlButton onClick={handleResize} yellow>
                {chatSize === 'maximized' ? (
                  <IoChevronUp size={14} />
                ) : (
                  <IoChevronDown size={14} />
                )}
              </ControlButton>
              <ControlButton onClick={handleMaximize} green>
                <IoExpand size={14} />
              </ControlButton>
            </ButtonContainer>
            <TypingStatus>
              {isTyping ? 'Frank is typing...' : ''}
            </TypingStatus>
          </Header>
          <MessageList ref={messageListRef}>
            {/* Map over the messages state variable and render a Message component for each one */}
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </MessageList>
          {/* Render the InputBar component with the appropriate size and onSubmit handler */}
          <InputBar size={chatSize} onSubmit={handleSubmit}>
            <UserInput
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Talk to Frank..."
            />
            <SendButton type="submit">Send</SendButton>
          </InputBar>
        </ChatContainer>
      )}
    </AnimatePresence>
  );
};

// Define styled component for the minimized chatbot button
const MinimizedChatbot = styled(motion.button)`
  position: fixed;
  bottom: 2px;
  right: 2px;
  width: 60px;
  height: 60px;
  background-color: darkgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: gray;
  }
`;

// Define styled component for the message wrapper
const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ user }) => (user ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

// Define styled component for the chatbot container
const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: ${({ size }) => (size === 'small' ? '0px' : size === 'medium' ? '10%' : '0')};
  right: ${({ size }) => (size === 'small' ? '-7px' : size === 'medium' ? '10%' : '0')};
  width: ${({ size }) => (size === 'small' ? '300px' : size === 'medium' ? '80%' : '100%')};
  height: ${({ size }) => (size === 'small' ? '400px' : size === 'medium' ? '80%' : '100%')};
  background-color: #222;
  border-radius: ${({ size }) => (size === 'small' ? '10px' : '0')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Define styled component for the header of the chatbot
const Header = styled.header`
  background-color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
`;

// Define styled component for the container of the control buttons
const ButtonContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

// Define styled component for the control buttons
const ControlButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ red, yellow, green }) => (red ? '#f44336' : yellow ? '#ffeb3b' : green ? '#4caf50' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  margin-right: 5px;

  &:hover {
    filter: brightness(1.1);
  }
`;

// Define styled component for the typing status indicator
const TypingStatus = styled.div`
  font-size: 14px;
  color: #ddd;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #4caf50;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

// Define styled component for the message list container
const MessageList = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
`;

// Define styled component for the message content
const MessageContent = styled.div`
    background-color: ${({ user }) => (user ? '#4caf50' : '#333')};
    color: #fff;
    padding: 8px 12px;
    border-radius: 12px;
    max-width: 70%;
    word-break: break-word;
  `;

// Define styled component for the input bar
const InputBar = styled.form`
    background-color: #333;
    padding: ${({ size }) => (size === 'small' ? '10px' : size === 'medium' ? '15px' : '20px')};
    display: flex;
  `;

// Define styled component for the user input
const UserInput = styled.input`
    flex-grow: 1;
    background-color: #222;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 12px;
    outline: none;
    font-size: 14px;
  `;

// Define styled component for the send button
const SendButton = styled.button`
    background-color: #4caf50;
    color: #fff;
    font-size: 14px;
    padding: 8px 12px;
    margin-left: 10px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
  
    &:hover {
      background-color: #3e8e41;
    }
  `;

export default Chatbot;