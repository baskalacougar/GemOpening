// casino.js
let balance = 0;
let initialDeposit = 0;
let playerSum = 0, dealerSum = 0;
const balanceDisplay = document.getElementById('balanceDisplay');
const profitDisplay = document.getElementById('profitDisplay');
const gameHistoryList = document.getElementById('gameHistory');

function updateBalance() {
  balanceDisplay.textContent = balance.toFixed(0);
  const profit = balance - initialDeposit;
  profitDisplay.textContent = (profit >= 0 ? '+' : '') + profit.toFixed(0) + ' GP';
  profitDisplay.style.color = profit >= 0 ? '#8fff8f' : '#ff9f9f';
}

function addHistory(entry) {
  const li = document.createElement('li');
  if (entry.includes('won')) {
    li.classList.add('win');
  } else if (entry.includes('lost')) {
    li.classList.add('loss');
  }

  const diceMatch = entry.match(/rolled (\d)/);
  if (diceMatch) {
    const rollValue = diceMatch[1];
    entry = entry.replace(`rolled ${rollValue}`, `<span class="dice">rolled ${rollValue}</span>`);
  }

  li.innerHTML = entry;
  gameHistoryList.prepend(li);
  const items = gameHistoryList.querySelectorAll('li');
  if (items.length > 20) items[items.length - 1].remove();
}

function updateLastResult(isWin, roll, amount, type) {
  const resultBox = document.getElementById('lastResult');
  resultBox.className = '';

  const formattedRoll = `<span class="dice">${roll}</span>`;

  if (isWin) {
    resultBox.classList.add('win-result');
    resultBox.innerHTML =
      type === 'hl' || type === 'number'
        ? `Rolled ${formattedRoll}. You win ${amount.toFixed(0)} GP!`
        : `You win ${amount.toFixed(0)} GP!`;
  } else {
    resultBox.classList.add('loss-result');
    resultBox.innerHTML =
      type === 'hl' || type === 'number'
        ? `Rolled ${formattedRoll}. You lose ${amount.toFixed(0)} GP.`
        : `You lose ${amount.toFixed(0)} GP.`;
  }
}

document.getElementById('setDepositBtn').addEventListener('click', () => {
  const val = parseInt(document.getElementById('depositInput').value);
  if (!isNaN(val) && val >= 0) {
    balance = val;
    initialDeposit = val;
    updateBalance();
    document.getElementById('casinoControls').style.display = 'block';
    document.getElementById('lastResult').textContent = 'Choose a game and stake.';
  }
});

document.getElementById('resetBtn').addEventListener('click', () => {
  balance = 0;
  updateBalance();
  document.getElementById('casinoControls').style.display = 'none';
  document.getElementById('depositInput').value = '';
  document.getElementById('lastResult').textContent = 'Balance reset.';
  gameHistoryList.innerHTML = '';
  document.getElementById('bjGameArea').style.display = 'none';
  playerSum = 0; dealerSum = 0;
});

document.getElementById('gameSelect').addEventListener('change', () => {
  const game = document.getElementById('gameSelect').value;
  document.getElementById('hlControls').style.display = game === 'hl' ? 'block' : 'none';
  document.getElementById('numberControls').style.display = game === 'number' ? 'block' : 'none';
  document.getElementById('blackjackControls').style.display = game === 'blackjack' ? 'block' : 'none';
  document.getElementById('lastResult').textContent = 'Ready to play ' +
    (game === 'hl' ? 'High/Low.' : game === 'number' ? 'Number Guess.' : 'Blackjack.');
});

document.getElementById('hlPlayBtn').addEventListener('click', () => {
  const stake = parseInt(document.getElementById('stakeInput').value);
  if (isNaN(stake) || stake <= 0) return alert('Enter valid stake');
  if (stake > balance) return alert('Insufficient balance');
  const choice = document.getElementById('hlChoice').value;
  const roll = Math.floor(Math.random() * 6) + 1;
  const win = (choice === 'low' && roll <= 3) || (choice === 'high' && roll >= 4);
  if (win) {
    const profit = stake * 0.8;
    balance += profit;
    updateBalance();
    addHistory(`HL: chose ${choice}, rolled ${roll}, won ${profit.toFixed(0)} GP`);
    updateLastResult(true, roll, profit, 'hl');
  } else {
    balance -= stake;
    updateBalance();
    addHistory(`HL: chose ${choice}, rolled ${roll}, lost ${stake} GP`);
    updateLastResult(false, roll, stake, 'hl');
  }
});

document.getElementById('numberPlayBtn').addEventListener('click', () => {
  const stake = parseInt(document.getElementById('stakeInput').value);
  if (isNaN(stake) || stake <= 0) return alert('Enter valid stake');
  if (stake > balance) return alert('Insufficient balance');
  const guess = parseInt(document.getElementById('numberGuess').value);
  if (isNaN(guess) || guess < 1 || guess > 6) return alert('Guess a number 1-6');
  const roll = Math.floor(Math.random() * 6) + 1;
  if (guess === roll) {
    const profit = stake * 5.5;
    balance += profit;
    updateBalance();
    addHistory(`Number: guessed ${guess}, rolled ${roll}, won ${profit.toFixed(0)} GP`);
    updateLastResult(true, roll, profit, 'number');
  } else {
    balance -= stake;
    updateBalance();
    addHistory(`Number: guessed ${guess}, rolled ${roll}, lost ${stake} GP`);
    updateLastResult(false, roll, stake, 'number');
  }
});

document.getElementById('bjStartBtn').addEventListener('click', () => {
  playerSum = 0;
  dealerSum = 0;
  document.getElementById('playerSum').textContent = '0';
  document.getElementById('dealerSum').textContent = '0';
  document.getElementById('bjGameArea').style.display = 'block';
  document.getElementById('lastResult').textContent = 'Game started. Hit or stand?';
  window.bjStake = parseInt(document.getElementById('stakeInput').value) || 0;
  if (window.bjStake > balance || window.bjStake <= 0) {
    alert('Enter a valid stake within your balance');
    document.getElementById('bjGameArea').style.display = 'none';
  }
});

document.getElementById('bjHitBtn').addEventListener('click', () => {
  if (!window.bjStake) return;
  const pRoll = Math.floor(Math.random() * 6) + 1;
  const dRoll = Math.floor(Math.random() * 6) + 1;
  playerSum += pRoll;
  dealerSum += dRoll;
  document.getElementById('playerSum').textContent = playerSum;
  document.getElementById('dealerSum').textContent = dealerSum;
  if (playerSum > 21) {
    balance -= window.bjStake;
    updateBalance();
    updateLastResult(false, pRoll, window.bjStake, 'blackjack');
    addHistory(`BJ: busted ${playerSum}, lost ${window.bjStake} GP`);
    document.getElementById('bjGameArea').style.display = 'none';
    window.bjStake = 0;
  } else if (dealerSum > 21) {
    const profit = window.bjStake;
    balance += profit;
    updateBalance();
    updateLastResult(true, dRoll, profit, 'blackjack');
    addHistory(`BJ: dealer busted ${dealerSum}, won ${profit} GP`);
    document.getElementById('bjGameArea').style.display = 'none';
    window.bjStake = 0;
  }
});

document.getElementById('bjStandBtn').addEventListener('click', () => {
  if (!window.bjStake) return;

  while (dealerSum < 17) {
    const dRoll = Math.floor(Math.random() * 6) + 1;
    dealerSum += dRoll;
  }

  document.getElementById('dealerSum').textContent = dealerSum;

  if (playerSum > 21) {
    balance -= window.bjStake;
    updateBalance();
    updateLastResult(false, null, window.bjStake, 'bj');
    addHistory(`BJ: busted ${playerSum}, lost ${window.bjStake} GP`);
  } else if (dealerSum > 21 || playerSum > dealerSum) {
    const profit = window.bjStake;
    balance += profit;
    updateBalance();
    updateLastResult(true, null, profit, 'bj');
    addHistory(`BJ: stand ${playerSum} vs ${dealerSum}, won ${profit} GP`);
  } else if (playerSum < dealerSum) {
    balance -= window.bjStake;
    updateBalance();
    updateLastResult(false, null, window.bjStake, 'bj');
    addHistory(`BJ: stand ${playerSum} vs ${dealerSum}, lost ${window.bjStake} GP`);
  } else {
    document.getElementById('lastResult').textContent = `Push! Both at ${playerSum}.`;
    addHistory(`BJ: push ${playerSum}`);
  }

  document.getElementById('bjGameArea').style.display = 'none';
  window.bjStake = 0;
});



function spawnCandies(count = 15) {
  const candyImages = [
    'https://img.icons8.com/emoji/48/dollar-banknote-emoji.png',
    'https://img.icons8.com/emoji/48/money-with-wings.png',
    'https://img.icons8.com/emoji/48/money-bag.png',
    'https://img.icons8.com/emoji/48/gem-stone.png',
    'https://img.icons8.com/emoji/48/ring-emoji.png',
    'https://img.icons8.com/emoji/48/coin-emoji.png',
    'https://img.icons8.com/emoji/48/bar-of-gold.png',
    'https://img.icons8.com/emoji/48/diamond-suit.png'
  ];

  for (let i = 0; i < count; i++) {
    const candy = document.createElement('div');
    candy.classList.add('candy');

    const img = candyImages[Math.floor(Math.random() * candyImages.length)];
    candy.style.backgroundImage = `url(${img})`;

    const size = Math.random() * 20 + 24;
    candy.style.width = `${size}px`;
    candy.style.height = `${size}px`;

    candy.style.left = `${Math.random() * 100}vw`;
    candy.style.top = `-${Math.random() * 60 + 20}px`;
    candy.style.animationDuration = `${5 + Math.random() * 4}s`;
    candy.style.animationDelay = `${Math.random() * 2}s`;

    document.getElementById("candies").appendChild(candy);
    setTimeout(() => candy.remove(), 10000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  spawnCandies();
  setInterval(() => spawnCandies(20), 2500);
});


document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      document.querySelector('.sidebar').classList.remove('open');
    }
  });
});
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}
