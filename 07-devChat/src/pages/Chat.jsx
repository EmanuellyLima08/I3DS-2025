import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    if (props.socket.author === "undefined") window.location.reload();

    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);

    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center px-3">
      <div className="chat-container d-flex flex-column p-3 mx-auto shadow-lg rounded-4">
        <div className="chat-body flex-grow-1 overflow-auto d-flex flex-column gap-3 mb-3 px-1">
          {messageList.map((message, index) => (
            <div
              key={index}
              className={`chat-bubble p-2 rounded-3 shadow-sm ${
                message.authorId === props.socket.id
                  ? "sent align-self-end"
                  : "received align-self-start"
              }`}
            >
              <div className="fw-bold">{message.author}</div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="chat-footer d-flex align-items-center">
          <input
            ref={messageRef}
            autoFocus
            id="msgUser"
            name="msgUser"
            type="text"
            className="chat-input flex-grow-1"
            placeholder="Digite sua mensagem..."
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="chat-button ms-2" onClick={handleSubmit}>
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
