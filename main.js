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

function createCardElement(card) {
  const board = document.getElementById("board");
  const cardElement = document.createElement("div");
  cardElement.innerHTML = card.name;
  cardElement.classList.add("card");
  board.appendChild(cardElement);
}

// MAIN
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
];

shuffledCards = shuffle(cards);
console.log(shuffledCards);
const isSameCard = checkIfSameIndex(shuffledCards, 0, 1);

for (const card of shuffledCards) {
  createCardElement(card);
}
