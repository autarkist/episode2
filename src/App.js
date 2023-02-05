import { useState } from "react";
import "./App.css";
import Text from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div className="App">
        <button onClick={() => setShowText(!showText)}>Show Text</button>
      </div>
      {showText && <Text />}
    </>
  );
}

export default App;
