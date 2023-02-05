import React, { useEffect, useState } from "react";

const Text = () => {
  const [text, setText] = useState("");

  // This is called when the component is mounted where this is defined
  useEffect(() => {
    console.log("Text Component mounted.");

    // when the component is unmounted
    return () => {
      console.log("Text Component unumounted");
    };

    // [] : Only once the useEffect is called
    // [element] : useEffect is called whenever element is updated
  }, []);

  return (
    <>
      <div className="App">
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <h2>{text}</h2>
      </div>
    </>
  );
};

export default Text;
