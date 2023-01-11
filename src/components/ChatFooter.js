import React from "react";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const ChatFooter = ({ handleSubmit, setInput, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control "
        placeholder="Ask anyting..."
      />
      <PaperAirplaneIcon onClick={handleSubmit} className="send-icon"/>
    </form>
  );
};
export default ChatFooter;
