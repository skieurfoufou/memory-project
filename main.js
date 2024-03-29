const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "F" },
  { name: "G" },
  { name: "G" },
  { name: "H" },
  { name: "H" },
  { name: "I" },
  { name: "I" },
];
let twoCards = [];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function checkIfSameCard(card1, card2) {
  if (card1 == card2) {
    console.log(`${card1} is the same card like ${card2}`);
    return true;
  } else {
    console.log(`${card1} is not the same card like ${card2}`);
    return false;
  }
}

function checkIfSameIndex(arr, i, j) {
  return i != j && arr[i].name === arr[j].name;
}
function turnCard(event) {}

function createCardElement(idx) {
  const board = document.getElementById("board");
  const cardElement = document.createElement("div");
  //cardElement.innerHTML = card.name;
  cardElement.id = idx;
  cardElement.classList.add("card");
  //cardElement.addEventListener("click", f);
  cardElement.onclick = cardClicked;
  board.appendChild(cardElement);
}
function f() {
  alert("you click on " + card.name);
}
const cardClicked = (evn) => {
  const cardElement = evn.target;
  if (twoCards.length >= 2) {
    return;
  }
  let idx = cardElement.id;
  cardElement.innerHTML = cards[idx].name;
  cardElement.name = cards[idx].name;
  twoCards.push(cardElement);
  console.log(twoCards);
  if (twoCards.length <= 1) {
    return;
  }
  if (!checkIfSameIndex(twoCards, 0, 1)) {
    setTimeout(() => {
      twoCards.forEach((cardElement) => {
        cardElement.innerHTML = "";
      });
      twoCards = [];
    }, 1000);
  }
};
// MAIN
window.onload = () => {
  shuffledCards = shuffle(cards);
  console.log(shuffledCards);

  const isSameCard = checkIfSameIndex(shuffledCards, 0, 1);

  for (const card in shuffledCards) {
    createCardElement(card);
  }
};
