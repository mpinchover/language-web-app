import { useState } from "react";
import Navbar from "./components/navbar";
import Translation from "./components/translation";

function App() {
  const [textToTranslate, setTextToTranslate] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Translation
        setTextToTranslate={setTextToTranslate}
        textToTranslate={textToTranslate}
      />
    </div>
  );
}

export default App;
