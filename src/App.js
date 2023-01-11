
import { useEffect, useRef, useState } from "react";
import "./App.css";
import ChatFooter from "./components/ChatFooter";
import ChatHeader from "./components/ChatHeader";

function App() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState()
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [answer]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(input){
      setLoading(true);
    const response = await fetch(
      "https://tanvir-alam625-chat-gpt-server.onrender.com/",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      }
    );
    const result = await response.json();
    setAnswer((prev) => [...prev, { question: input, answer: result.bot }]);
    setLoading(false);
    }
    setInput("");
  };


  return (
      <div className="chat-app">
        <div className="chat-header">
          {
            error === 'offline' ? (<div style={{backgroundColor:'yellow', padding:'10px', borderRadius: '12px'}}>
              <h4 style={{color:'white'}}>Something wrong</h4>
            </div>):null
          }
          <ChatHeader setAnswer={setAnswer} />
          <hr />
        </div>
        <div className="chat-box">
          {answer.length > 0 &&
            answer.map((mess, index) => {
              return (
                <div className="chat-message-container" key={index}>
                  <div className="user-container">
                    <div className="user">
                      <span> {mess.question}</span>
                    </div>
                  </div>
                  <div className="message-container">
                    <div className="message">
                      <span>{mess.answer}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          <div ref={messagesEndRef}></div>
        </div>
        {/* this for scroll bottom message  */}

        <div style={{ position: "absolute", display: "block", bottom: "15vh" }}>
          {loading && (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        <div className="chat-footer">
          <ChatFooter
            setInput={setInput}
            input={input}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
  );
}
// serviceWorkerDev();

export default App;
