import getRandomElementFromArray from "../utils/randomElementFromArray";
import phrase from "../utils/phrases.json";

const ButtonPhrase = ({ setphraseRandom, setpathRandom, arrBackground }) => {
  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrase);
    setphraseRandom(newRandomPhrase);
    const newPath = getRandomElementFromArray(arrBackground);
    setpathRandom(newPath);
  };

  return (
    <button className="button" onClick={handleRandomPhrase}>
      Probar mi suerte
    </button>
  );
};

export default ButtonPhrase;
