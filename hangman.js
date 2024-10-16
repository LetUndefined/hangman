//open console to play the game.

const woordenlijst = ["kat", "hond", "leeuw"];

const willekeurigWoord = () => {
  woord = Math.floor(Math.random() * woordenlijst.length);
  return woordenlijst[woord];
};

let teRadenWoord;
let geradenLetters = [];
let fouteGokken = 0;
const maxFouten = 6;

const runGame = () => {
  fouteGokken = 0;
  resetWord();
  generateWord();
  while (fouteGokken < maxFouten) {
    console.log(geradenStatus.join(" "));
    let guess = prompt("Geef een letter!");
    if (geradenLetters.includes(guess)) {
      alert("deze letter is al geraden of je geeft foute waardes in! Probeer het opnieuw");
      continue;
    }
    geradenLetters.push(guess);

    if (teRadenWoord.includes(guess) && guess.length === 1) {
      for (let i = 0; i < teRadenWoord.length; i++) {
        if (teRadenWoord[i] == guess) {
          geradenStatus[i] = guess;
          console.log("goed geraden!");
        }
      }
    } else {
      alert("deze letter zit niet in het woord of je geeft foute waarden in, probeer het opnieuw!");
      fouteGokken++;
      console.log("Je hebt al " + fouteGokken + " keer fout geraden!");
    }
    if (teRadenWoord === geradenStatus.join("")) {
      console.log(teRadenWoord);
      alert("you won the game!");
      break;
    }
    if (fouteGokken > maxFouten) {
      console.log("Je hebt te vaak fout geraden! het woord was: " + teRadenWoord);
      alert("you lost the game!");
      break;
    }
  }
  continuePlaying();
};

const resetWord = () => {
  teRadenWoord = "";
  geradenLetters = [];
};

const generateWord = () => {
  teRadenWoord = willekeurigWoord();
  geradenStatus = Array(teRadenWoord.length).fill("_");
};

const checkWin = () => {};

const continuePlaying = () => {
  let choice = prompt("wil je opnieuw spelen?");
  if (choice == "ja") {
    alert("Nieuw spel begint!");
    console.log("New Game Starts ----------------");
    runGame();
  } else {
    alert("het spel eindigt hier!");
    console.log("Wil je toch verder spelen? refresh de pagina!");
    return;
  }
};
runGame();
