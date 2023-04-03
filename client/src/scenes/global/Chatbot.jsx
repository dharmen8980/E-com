import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Chatbot = () => {
  //initial messages
  const initialMessages = [
    {
      user: "",
      bot: "Hello, I am SuperEx Chatbot?",
    },
  ];

  //state for messages
  const [messages, setMessages] = useState(initialMessages);
  const [userMessage, setUserMessage] = useState("");

  //send message to server and retrieve response
  async function handleSubmit(event) {
    event.preventDefault();
    setMessages([...messages, { user: userMessage, bot: "..." }]);

    try {
      const response = await fetch("http://localhost:4000/api/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      //add response to messages
      setMessages([...messages, { user: userMessage, bot: data.result }]);
      setUserMessage("");
    } catch (error) {
      // general error handling
      console.error(error);
      alert(error.message);
    }
  }

  //scroll to bottom of chat
  const messageListRef = useRef(null);

  useEffect(() => {
    messageListRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      m="80px"
      backgroundColor="rgb(100, 116, 134)"
      textAlign="center"
      position="relative"
      px={2}
      py={1}

    >
      <Typography
        variant="h3"
        fontWeight="700"
        fontSize="1.5rem"
        color="white"
        marginY="0.5rem"
      >
        SupportEX
      </Typography>
      <Box
        height="60rem"
        display="flex"
        flexDirection="column"
        backgroundColor="rgb(100, 116, 134)"
        overflow="auto"
        py="2rem"
        position="relative"
      >
        {messages.map((message, index) => (
          <div key={index} ref={messageListRef}>
            {message.user && (
              <Box
                textAlign="right"
                color="white"
                display="flex"
                justifyContent="flex-end"
                mb="1rem"
              >
                <Typography
                  sx={{
                    maxWidth: "40rem",
                    px: "20px",
                    py: "2px",
                    fontSize: "0.8rem",
                    backgroundColor: "#627E8B",
                  }}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "1px 1px 1px 1px #D0E6f0",
                  }}
                >
                  {message.user}
                </Typography>
              </Box>
            )}
            {message.bot && (
              <Box
                textAlign="left"
                color="white"
                display="flex"
                justifyContent="flex-start"
                mb="2rem"
              >
                <Typography
                  sx={{
                    maxWidth: "40rem",
                    px: "20px",
                    py: "2px",
                    fontSize: "0.8rem",
                    backgroundColor: "#627E8B",
                  }}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "1px 1px 1px 1px #D0E6f0",
                  }}
                >
                  {message.bot}
                </Typography>
              </Box>
            )}
          </div>
        ))}
      </Box>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          placeholder="Type your message here"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          style={{
            width: "85%",
            height: "2.5rem",
            marginTop: "1rem",
            fontSize: "1.2rem",
            padding: "0.5rem 1rem",
          }}
        />
        <input
          type="submit"
          value="Send"
          style={{
            width: "15%",
            height: "2.5rem",
            marginTop: "1rem",
            fontSize: "1.2rem",
          }}
        />
      </form>
    </Box>
  );
};

export default Chatbot;
