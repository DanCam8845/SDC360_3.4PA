import { useState } from "react";

function App() {
  const [messageInput, setMessageInput] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('Hello World');

  const handleClick = () => {
    setDisplayedMessage(messageInput);
  };

  return (
    <div>
    <label htmlFor="message">Message to Display: </label>
    <input 
    id="message"
    type="text"
    value={messageInput}
    onChange={(e) => setMessageInput(e.target.value)}
    />
    <button onClick={handleClick}>Display Message</button>
    <h2>{displayedMessage}</h2>
    </div>
  );
}

export default App;
