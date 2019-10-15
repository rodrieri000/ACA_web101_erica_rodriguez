const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8], 
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

const grid = () => Array.from(document.getElementsByClassName('b'));
const bNumId = (bEl) => Number.parseInt(bEl.id.replace('b', ''));
const emptyQs = () => grid().filter(_bEl => _bEl.innerText === '');
const allSame = (arr) => arr.every(_bEl => _bEl.innerText === arr[0].innerText && _bEl.innerText !== '');

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => bNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);

const opponentTurn = () => {
  disableListeners();
  setTimeout(() => {
    takeTurn(opponentChoice(), 'o');
    enableListeners();
  }, 1000);
}

const clickFn = (event) => {
  takeTurn(bNumId(event.target), 'x');
  opponentTurn();
};

const enableListeners = () => grid().forEach(_bEl => _bEl.addEventListener('click',clickFn));
const disableListeners = () => grid().forEach(_bEl => _bEl.addEventListener('click',clickFn));

enableListeners();