import { useState } from "react";
import "./App.css";
import ButtonPhrase from "./components/ButtonPhrase";
import PhrasesCard from "./components/PhrasesCard";
import phrases from "./utils/phrases.json";
import randomElementFromArray from "./utils/randomElementFromArray";

const arrBackground = [1, 2, 3, 4];

function App() {
  const initialPhrase = randomElementFromArray(phrases);

  const initialPath = randomElementFromArray(arrBackground);

  const [phraseRandom, setphraseRandom] = useState(initialPhrase);

  const [pathRandom, setpathRandom] = useState(initialPath);

  const objStyle = {
    backgroundImage: `url("/images/fondo${pathRandom}.jpg")`,
  };

  return (
    <div style={objStyle} className="app">
      <h1 className="appTitle">Galleta de la fortuna</h1>
      <ButtonPhrase
        setphraseRandom={setphraseRandom}
        setpathRandom={setpathRandom}
        arrBackground={arrBackground}
      />
      <PhrasesCard phraseRandom={phraseRandom} />
    </div>
  );
}

export default App;
