<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Opening Gems with Baśka La Cougar</title>
  <style>
    body {
      background-color: #0a0a0a;
      background-image: url('https://static.tibia.com/images/global/header/background-artwork.jpg');
      background-size: cover;
      background-attachment: fixed;
      color: #d4af37;
      font-family: 'Verdana', sans-serif;
      text-align: center;
      padding: 30px;
      overflow-x: hidden;
    }

    h1 {
      color: #ffccff;
      text-shadow: 2px 2px 5px black;
      margin-bottom: 30px;
    }

    .main-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 50px;
      flex-wrap: nowrap;
      max-width: 1200px;
      margin: 0 auto;
    }

    .left-panel, .right-panel {
      flex: 1;
      min-width: 300px;
    }

    select {
      font-size: 16px;
      margin: 10px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid #553311;
      background: linear-gradient(#4b2e10, #2e1c07);
      color: #ffe599;
      text-shadow: 1px 1px 2px black;
      box-shadow: 0 0 8px rgba(0,0,0,0.5);
    }

    select option {
      background-color: #2e1c07;
      color: #ffe599;
    }

    button {
      font-size: 24px;
      padding: 18px 36px;
      border-radius: 10px;
      border: 2px solid #553311;
      background: linear-gradient(#4b2e10, #2e1c07);
      color: #ffe599;
      text-shadow: 1px 1px 2px black;
      box-shadow: 0 0 8px rgba(0,0,0,0.5);
      margin-top: 10px;
    }

    button:hover {
      background: linear-gradient(#6b3e10, #3e2607);
      cursor: pointer;
    }

    .output {
      margin-top: 30px;
      font-size: 18px;
      border: 2px solid #daa520;
      padding: 20px;
      border-radius: 15px;
      background: rgba(0, 0, 0, 0.8);
      color: #ffdb7d;
      transition: box-shadow 0.5s ease, transform 0.5s ease;
      text-shadow: 1px 1px 2px black;
      position: relative;
      z-index: 2;
      max-width: 100%;
    }
    .desired-hit {
  color: #ffcc00;
  text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffaa00;
}

    .label {
      color: #ffb6c1;
      font-weight: bold;
    }

    .highlight {
      border: 2px solid #ff0040;
      animation: explode 1s ease-out, pulseGold 2s ease-in-out infinite;
      transform: scale(1.05);
    }

    @keyframes pulseGold {
      0% { box-shadow: 0 0 10px 5px #ffcc00; }
      50% { box-shadow: 0 0 30px 15px #ffaa00; }
      100% { box-shadow: 0 0 10px 5px #ffcc00; }
    }

    @keyframes explode {
      0% { transform: scale(1); box-shadow: 0 0 0px #fff; }
      30% { transform: scale(1.2); box-shadow: 0 0 20px #fff; }
      60% { transform: scale(0.95); box-shadow: 0 0 10px #ff0040; }
      100% { transform: scale(1.05); box-shadow: 0 0 25px #ffaa00; }
    }

    #modHistory li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  color: #ffffff;
  font-weight: bold;
  white-space: nowrap;
  gap: 10px;
  text-align: left;
}

#modHistory li span:first-child {
  max-width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
}




.firework {
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #fff700 0%, #ff3300 40%, transparent 100%);
  border-radius: 50%;
  animation: firework 2s ease-out forwards, sparkle 0.6s ease-in-out;
  z-index: 999;
  pointer-events: none;
  opacity: 1;
  box-shadow: 0 0 30px 10px #ff0, 0 0 60px 20px #f00, 0 0 80px 30px #ff8800;
}

@keyframes firework {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
    filter: brightness(2);
  }
  30% {
    transform: translateY(-100px) scale(2.5);
    filter: brightness(3);
  }
  70% {
    transform: translateY(-250px) scale(3.5);
    filter: brightness(5);
  }
  100% {
    transform: translateY(-400px) scale(0.3);
    opacity: 0;
    filter: brightness(0);
  }
}

@keyframes sparkle {
  0% {
    box-shadow: 0 0 40px #fff, 0 0 60px #ff0;
  }
  50% {
    box-shadow: 0 0 80px #ff6600, 0 0 100px #ffff00;
  }
  100% {
    box-shadow: 0 0 40px #ff0, 0 0 80px #f00;
  }
}


  </style>
</head>
<body>
  <h1>💎 Opening Gems with Baśka La Cougar 💋</h1>
  <div class="main-container">
    <div class="left-panel">
      <div>
        <br><label for="profesja">Select vocation:</label><br>
        <select id="profesja" onchange="updateDesiredMods()">
          <option>Knight</option>
          <option>Sorcerer</option>
          <option>Druid</option>
          <option>Paladin</option>
          <option>Monk</option>
        </select><br>

        <label for="wielkosc">Select gem size:</label><br>
        <select id="wielkosc" onchange="toggleDesiredModSelect()">
          <option value="lesser">Lesser (125k)</option>
          <option value="regular">Regular (1kk)</option>
          <option value="greater">Greater (6kk)</option>
        </select><br>

        <div id="desiredModWrapper">
          <label for="desiredMod">Desired 3rd mod:</label><br>
          <select id="desiredMod" onchange="clearAfterDesiredChange()">
            <option value="">(None)</option>
          </select>
        </div>

        <button onclick="openGem()">Open Gem 💥</button>
      </div>

      <div class="output" id="lossDisplay">
        <p>
          <span class="label">Your loss:</span>
          <span id="lossValue">0 zł</span>
          <select id="currency" onchange="updateLoss()" style="margin-left: 15px; font-size: 14px; padding: 5px 10px; border-radius: 8px;">
            <option value="pln">PLN</option>
            <option value="eur">EUR</option>
            <option value="tc">Tibia Coin</option>
          </select>
        </p>
      </div>
      <div class="output" id="wynik">
        <p>Waiting for your move, cutie... 😘</p>
      </div>
    </div>

    <div class="right-panel">
      <div class="output" id="historyBox">
        <p><span class='label'>Hit history (Mod 3):</span></p>
        <ul id="modHistory" style="list-style: none; padding: 0;"></ul>
      </div>
    </div>
  </div>
  <!-- Modal confirmation -->
<div id="modal" style="display:none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.8); z-index: 9999; justify-content: center; align-items: center;">
  <div style="background: #1c0e03; border: 2px solid gold; padding: 30px; border-radius: 20px; text-align: center; color: #ffe599; box-shadow: 0 0 30px gold;">
    <h2 style="margin-bottom: 20px;">🎯 You've hit your desired gem!</h2>
    <p>Do you want to continue opening?</p>
    <div style="margin-top: 20px;">
      <button onclick="closeModal(true)" style="margin: 10px;">Yes, keep going</button>
      <button onclick="closeModal(false)" style="margin: 10px;">No, stop</button>
    </div>
  </div>
</div>

  <script>
  let totalCost = 0;
    let gemCount = 0;
    let mod3Counts = {};

    const thirdMods = {
      General: [
    "+2% increased critical damage",
    "+0.28% dodge",
    "+2% life leech",
    "+0.8% mana leech",
    "Revelation Mastery – +150 Gift of Life"
  ],
  Knight: [
    "Aug. Avatar of Steel – -900s cooldown",
    "Aug. Executioner's Throw – -2s cooldown",
    "Aug. Executioner's Throw – +6% increased damage",
    "Aug. Executioner's Throw – +12% increased critical damage",
    "Aug. Fierce Berserk – +5% increased damage",
    "Aug. Fierce Berserk – +8% increased critical damage",
    "Aug. Berserk – +5% increased damage",
    "Aug. Berserk – +12% increased critical damage",
    "Aug. Front Sweep – +8% increased damage",
    "Aug. Front Sweep – +12% increased critical damage",
    "Aug. Groundshaker – +6.5% increased damage",
    "Aug. Groundshaker – +12% increased critical damage",
    "Aug. Annihilation – +12% increased damage",
    "Aug. Annihilation – +15% increased critical damage",
    "Aug. Fair Wound Cleasing – +10% increased healing",
    "Revelation Mastery – +150 Avatar of Steel",
    "Revelation Mastery – +150 Executioner's Throw",
    "Revelation Mastery – +150 Combat Mastery"
  ],
  Paladin: [
    "Aug. Avatar of Light – -900s cooldown",
    "Aug. Divine Dazzle – -4s cooldown",
    "Aug. Divine Grenade – +6% increased damage",
    "Aug. Divine Grenade – +12% increased critical damage",
    "Aug. Divine Caldera – +5% increased damage",
    "Aug. Divine Caldera – +8% increased critical damage",
    "Aug. Divine Missile – +8% increased damage",
    "Aug. Divine Missile – +12% increased critical damage",
    "Aug. Ethereal Spear – +10% increased damage",
    "Aug. Ethereal Spear – +15% increased critical damage",
    "Aug. Strong Ethereal Spear – +8% increased damage",
    "Aug. Strong Ethereal Spear – +12% increased critical damage",
    "Aug. Divine Empowerment – -6s cooldown",
    "Aug. Divine Grenade – -2s cooldown",
    "Aug. Salvation – +6% increased healing",
    "Revelation Mastery – +150 Avatar of Light",
    "Revelation Mastery – +150 Divine Grenade",
    "Revelation Mastery – +150 Divine Empowerment"
  ],
  Druid: [
    "Aug. Ultimate Healing – +5% increased healing",
    "Aug. Avatar of Nature – -900s cooldown",
    "Aug. Nature Embrace – -10s cooldown",
    "Aug. Terra Burst – +7% increased damage",
    "Aug. Terra Burst – +12% increased critical damage",
    "Aug. Ice Burst – +7% increased damage",
    "Aug. Ice Burst – +12% increased critical damage",
    "Aug. Eternal Winter – +8% increased damage",
    "Aug. Eternal Winter – +12% increased critical damage",
    "Aug. Terra Wave – +5% increased damage",
    "Aug. Terra Wave – +12% increased critical damage",
    "Aug. Strong Ice Wave – +8% increased damage",
    "Aug. Strong Ice Wave – +15% increased critical damage",
    "Aug. Heal Friend – +5% increased healing",
    "Aug. Mass Healing – +5% increased healing",
    "Revelation Mastery – +150 Avatar of Nature",
    "Revelation Mastery – +150 Blessing of the Grove",
    "Revelation Mastery – +150 Twin Bursts"
  ],
  Sorcerer: [
    "Aug. Ultimate Healing – +5% increased healing",
    "Aug. Avatar of Storm – -900s cooldown",
    "Aug. Energy Wave – -1s cooldown",
    "Aug. Great Death Beam – +10% increased damage",
    "Aug. Great Death Beam – +15% increased critical damage",
    "Aug. Hell's Core – +8% increased damage",
    "Aug. Hell's Core – +12% increased critical damage",
    "Aug. Energy Wave – +5% increased damage",
    "Aug. Energy Wave – +12% increased critical damage",
    "Aug. Great Fire Wave – +5% increased damage",
    "Aug. Great Fire Wave – +12% increased critical damage",
    "Aug. Rage of the Skies – +8% increased damage",
    "Aug. Rage of the Skies – +12% increased critical damage",
    "Aug. Great Energy Beam – +10% increased damage",
    "Aug. Great Energy Beam – +15% increased critical damage",
    "Revelation Mastery – +150 Avatar of Storm",
    "Revelation Mastery – +150 Beam Mastery",
    "Revelation Mastery – +150 Drain Body"
  ],
  Monk: [
    "Aug. Avatar of Balance – -900s cooldown",
    "Aug. Spirit Mend – +6% increased healing",
    "Aug. Spiritual Outburst – +5% increased damage",
    "Aug. Spiritual Outburst – +8% increased critical damage",
    "Aug. Forceful Uppercut – +10% increased damage",
    "Aug. Forceful Uppercut – +8% increased critical damage",
    "Aug. Flurry of Blows – +6.5% increased damage",
    "Aug. Flurry of Blows – +8% increased critical damage",
    "Aug. Greater Flurry of Blows – +5% increased damage",
    "Aug. Greater Flurry of Blows – +8% increased critical damage",
    "Aug. Sweeping Takedown – +5% increased damage",
    "Aug. Sweeping Takedown – +8% increased critical damage",
    "Aug. Focus Serenity – -150s cooldown",
    "Aug. Focus Harmony – -30s cooldown",
    "Aug. Mass Spirit Mend – +5% increased healing",
    "Revelation Mastery – +150 Avatar of Balance",
    "Revelation Mastery – +150 Ascetic",
    "Revelation Mastery – +150 Spiritual Outburst"
  ]
};

const mods = {
  Knight: ["+300 HP", "+100 Mana", "+500 Cap", "+5% Mitigation", "+2% Earth Resistance", "+1% Earth Resistance, +150 HP", "+1% Earth Resistance, +50 Mana"],
  Sorcerer: ["+100 HP", "+600 Mana", "+200 Cap", "+2% Earth Resistance"],
  Druid: ["+100 HP", "+600 Mana", "+200 Cap", "+2% Earth Resistance"],
  Paladin: ["+200 HP", "+300 Mana", "+400 Cap", "+2% Earth Resistance"],
  Monk: ["+200 HP", "+200 Mana", "+500 Cap", "+2% Earth Resistance"]
};

const secondMods = [
  "+1% physical resistance",
  "+1% death resistance",
  "+1.5% death resistance, -1% holy resistance",
  "+1% holy resistance",
  "+1.5% holy resistance, -1% death resistance",
  "+3% life drain resistance",
  "+3% mana drain resistance",
  "+1.5% life drain resistance, +1.5% mana drain resistance",
  "+1% earth resistance, +1% energy resistance",
  "+1% earth resistance, +1% ice resistance",
  "+3% earth resistance, -2% energy resistance",
  "+3% earth resistance, -2% fire resistance",
  "+3% earth resistance, -2% ice resistance",
  "+3% energy resistance, -2% earth resistance",
  "+3% energy resistance, -2% fire resistance",
  "+3% energy resistance, -2% ice resistance",
  "+1% fire resistance, +1% earth resistance",
  "+1% fire resistance, +1% energy resistance",
  "+1% fire resistance, +1% ice resistance",
  "+3% fire resistance, -2% earth resistance",
  "+3% fire resistance, -2% energy resistance",
  "+3% fire resistance, -2% ice resistance",
  "+1% ice resistance, +1% energy resistance",
  "+3% ice resistance, -2% earth resistance",
  "+3% ice resistance, -2% energy resistance",
  "+3% ice resistance, -2% fire resistance"
];

    function getRandomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    function closeModal(keepGoing) {
  document.getElementById("modal").style.display = "none";
  if (!keepGoing) {
    stopOpening = true;
    showBaskaExitMessage();


    setTimeout(() => {
      location.reload(true); 
    }, 4000);
  } else {
    stopOpening = false;
  }
}

    function formatGold(value) {
      if (value >= 1000000) return (value / 1000000) + 'kk';
      if (value >= 1000) return (value / 1000) + 'k';
      return value + 'gp';
    }
    function showBaskaExitMessage() {
  const outputBox = document.getElementById("wynik");
  outputBox.innerHTML = `
    <div style="
      font-size: 22px;
      color: #ffccff;
      padding: 30px;
      background: rgba(0,0,0,0.7);
      border: 2px dashed #ff69b4;
      border-radius: 15px;
      animation: fadeIn 1s ease-in-out;
    ">
      <p>💋 <strong>Baśka says:</strong></p>
      <p style="font-style: italic;">
        Enough for today...<br>
        Go get some tea and come back later ☕💅
      </p>
    </div>
  `;
  outputBox.classList.add("highlight");
}

    function updateDesiredMods() {
      const prof = document.getElementById("profesja").value;
      const select = document.getElementById("desiredMod");
      select.innerHTML = '<option value="">(Null - you are not looking for any particular mod)</option>';
      [...thirdMods.General, ...thirdMods[prof]].forEach(mod => {
        const option = document.createElement("option");
        option.textContent = mod;
        select.appendChild(option);
      });
    }

    function toggleDesiredModSelect() {
      const wrapper = document.getElementById("desiredModWrapper");
      const size = document.getElementById("wielkosc").value;
      wrapper.style.display = size === "greater" ? "block" : "none";
    }
    function clearAfterDesiredChange() {
  mod3Counts = {}; 
  updateHistory(); 
  document.getElementById("wynik").innerHTML = `<p>Waiting for your move, cutie... 😘</p>`;
  document.getElementById("wynik").classList.remove("highlight");
}
    let stopOpening = false;

function openGem() {
  if (stopOpening) return;

  const prof = document.getElementById("profesja").value;
  const size = document.getElementById("wielkosc").value;
  const desired = document.getElementById("desiredMod").value;

  const outputBox = document.getElementById("wynik");
  outputBox.classList.remove("highlight");

  let result = `<h2>${size.toUpperCase()} GEM 💠</h2>`;
  let gemCost = size === "lesser" ? 125000 : size === "regular" ? 1000000 : 6000000;
  totalCost += gemCost;
  updateLoss();
  gemCount++;

  result += `<p><span class='label'>Profession:</span> ${prof}</p>`;
  result += `<p><span class='label'>Cost:</span> ${formatGold(gemCost)}</p>`;

  let firstMod = getRandomItem(mods[prof]);
  result += `<p><span class='label'>Mod 1:</span> ${firstMod}</p>`;

  if (size !== "lesser") {
    let secondMod = getRandomItem(secondMods);
    result += `<p><span class='label'>Mod 2:</span> ${secondMod}</p>`;
  }

  let thirdMod = "";
  if (size === "greater") {
    let thirdPool = [...thirdMods.General, ...thirdMods[prof]];
    thirdMod = getRandomItem(thirdPool);
    result += `<p><span class='label'>Mod 3:</span> ${thirdMod}</p>`;

    mod3Counts[thirdMod] = (mod3Counts[thirdMod] || 0) + 1;
    updateHistory();

    if (thirdMod === desired) {
      outputBox.classList.add("highlight");
      launchFireworks();
      showModal(); //
    }
  }

  result += `<p><span class='label'>Total cost:</span> ${formatGold(totalCost)}</p>`;
  result += `<p><span class='label'>Gems opened:</span> ${gemCount}</p>`;
  outputBox.innerHTML = result;
}

function showModal() {
  const textBox = document.querySelector("#modal h2");
  textBox.innerHTML = `🎯 You've hit your desired gem after <span style="color: gold;">${gemCount}</span> attempts!`;
  document.getElementById("modal").style.display = "flex";
}


function updateHistory() {
  const list = document.getElementById("modHistory");
  const desired = document.getElementById("desiredMod").value;
  list.innerHTML = "";

  for (const [mod, count] of Object.entries(mod3Counts)) {
    const li = document.createElement("li");

    const modText = document.createElement("span");
    modText.textContent = mod;

    const countSpan = document.createElement("span");
    countSpan.textContent = `${count}x`;
    countSpan.style.color = "#ffd700";
    countSpan.style.fontWeight = "bold";

    li.appendChild(modText);
    li.appendChild(countSpan);

    if (mod === desired) {
      li.classList.add("desired-hit");
    }

    list.appendChild(li);
  }
}



function launchFireworks(count = 50) {
  for (let i = 0; i < count; i++) {
    const fw = document.createElement('div');
    fw.classList.add('firework');
    fw.style.left = Math.random() * 100 + 'vw';
    fw.style.top = (30 + Math.random() * 40) + 'vh';
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 2500);
  }

  const boom = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
  boom.volume = 0.5;
  boom.play();
}


    function updateLoss() {
    const currency = document.getElementById("currency").value;
    let value = totalCost;
    let display = "";

    if (currency === "eur") {
      const pln = (value / 10000000) * 37;
      value = pln / 4.28;
      display = value.toFixed(2) + " €";
    } else if (currency === "tc") {
      value = value / 40000;
      display = value.toFixed(2) + " TC";
    } else {
      value = (value / 10000000) * 37;
      display = value.toFixed(2) + " zł";
    }

    document.getElementById("lossValue").textContent = display;
  }
    updateDesiredMods();
    toggleDesiredModSelect();
  </script>
</body>
</html>
