let totalCost = 0;
let lastGemResult = "";
let mod3Counts = {};
let modAttemptTrackers = {};
let lesserCount = 0;
let regularCount = 0;
let greaterCount = 0;
let desiredGemCount = 0;
let hitAttempts = [];
let modalShown = false;
let perfectSimResults = [];

const thirdMods = {
  General: [
"+2% increased critical damage",
"+0.28% dodge",
"+2% life leech",
"+0.8% mana leech",
"Revelation Mastery +150 Gift of Life"
],
Knight: [
"Aug. Avatar of Steel -900s cooldown",
"Aug. Executioner's Throw -2s cooldown",
"Aug. Executioner's Throw +6% increased damage",
"Aug. Executioner's Throw +12% increased critical damage",
"Aug. Fierce Berserk +5% increased damage",
"Aug. Fierce Berserk +8% increased critical damage",
"Aug. Berserk +5% increased damage",
"Aug. Berserk +12% increased critical damage",
"Aug. Front Sweep +8% increased damage",
"Aug. Front Sweep +12% increased critical damage",
"Aug. Groundshaker +6.5% increased damage",
"Aug. Groundshaker +12% increased critical damage",
"Aug. Annihilation +12% increased damage",
"Aug. Annihilation +15% increased critical damage",
"Aug. Fair Wound Cleasing +10% increased healing",
"Revelation Mastery +150 Avatar of Steel",
"Revelation Mastery +150 Executioner's Throw",
"Revelation Mastery +150 Combat Mastery"
],
Paladin: [
"Aug. Avatar of Light -900s cooldown",
"Aug. Divine Dazzle -4s cooldown",
"Aug. Divine Grenade +6% increased damage",
"Aug. Divine Grenade +12% increased critical damage",
"Aug. Divine Caldera +5% increased damage",
"Aug. Divine Caldera +8% increased critical damage",
"Aug. Divine Missile +8% increased damage",
"Aug. Divine Missile +12% increased critical damage",
"Aug. Ethereal Spear +10% increased damage",
"Aug. Ethereal Spear +15% increased critical damage",
"Aug. Strong Ethereal Spear +8% increased damage",
"Aug. Strong Ethereal Spear +12% increased critical damage",
"Aug. Divine Empowerment -6s cooldown",
"Aug. Divine Grenade -2s cooldown",
"Aug. Salvation +6% increased healing",
"Revelation Mastery +150 Avatar of Light",
"Revelation Mastery +150 Divine Grenade",
"Revelation Mastery +150 Divine Empowerment"
],
Druid: [
"Aug. Ultimate Healing +5% increased healing",
"Aug. Avatar of Nature -900s cooldown",
"Aug. Nature Embrace -10s cooldown",
"Aug. Terra Burst +7% increased damage",
"Aug. Terra Burst +12% increased critical damage",
"Aug. Ice Burst +7% increased damage",
"Aug. Ice Burst +12% increased critical damage",
"Aug. Eternal Winter +8% increased damage",
"Aug. Eternal Winter +12% increased critical damage",
"Aug. Terra Wave +5% increased damage",
"Aug. Terra Wave +12% increased critical damage",
"Aug. Strong Ice Wave +8% increased damage",
"Aug. Strong Ice Wave +15% increased critical damage",
"Aug. Heal Friend +5% increased healing",
"Aug. Mass Healing +5% increased healing",
"Revelation Mastery +150 Avatar of Nature",
"Revelation Mastery +150 Blessing of the Grove",
"Revelation Mastery +150 Twin Bursts"
],
Sorcerer: [
"Aug. Ultimate Healing +5% increased healing",
"Aug. Avatar of Storm -900s cooldown",
"Aug. Energy Wave -1s cooldown",
"Aug. Great Death Beam +10% increased damage",
"Aug. Great Death Beam +15% increased critical damage",
"Aug. Hell's Core +8% increased damage",
"Aug. Hell's Core +12% increased critical damage",
"Aug. Energy Wave +5% increased damage",
"Aug. Energy Wave +12% increased critical damage",
"Aug. Great Fire Wave +5% increased damage",
"Aug. Great Fire Wave +12% increased critical damage",
"Aug. Rage of the Skies +8% increased damage",
"Aug. Rage of the Skies +12% increased critical damage",
"Aug. Great Energy Beam +10% increased damage",
"Aug. Great Energy Beam +15% increased critical damage",
"Revelation Mastery +150 Avatar of Storm",
"Revelation Mastery +150 Beam Mastery",
"Revelation Mastery +150 Drain Body"
],
Monk: [
"Aug. Avatar of Balance -900s cooldown",
"Aug. Spirit Mend +6% increased healing",
"Aug. Spiritual Outburst +5% increased damage",
"Aug. Spiritual Outburst +8% increased critical damage",
"Aug. Forceful Uppercut +10% increased damage",
"Aug. Forceful Uppercut +8% increased critical damage",
"Aug. Flurry of Blows +6.5% increased damage",
"Aug. Flurry of Blows +8% increased critical damage",
"Aug. Greater Flurry of Blows +5% increased damage",
"Aug. Greater Flurry of Blows +8% increased critical damage",
"Aug. Sweeping Takedown +5% increased damage",
"Aug. Sweeping Takedown +8% increased critical damage",
"Aug. Focus Serenity -150s cooldown",
"Aug. Focus Harmony -30s cooldown",
"Aug. Mass Spirit Mend +5% increased healing",
"Revelation Mastery +150 Avatar of Balance",
"Revelation Mastery +150 Ascetic",
"Revelation Mastery +150 Spiritual Outburst"
]
};

const mods = {
Knight: [
"+300 HP", "+100 Mana", "+500 Cap", "+5% Mitigation",
"+2% Earth Resistance", "+1% Earth Resistance, +150 HP", "+1% Earth Resistance, +50 Mana", "+1% Earth Resistance, +250 Cap",
"+2% Energy Resistance", "+1% Energy Resistance, +150 HP", "+1% Energy Resistance, +50 Mana", "+1% Energy Resistance, +250 Cap",
"+2% Fire Resistance", "+1% Fire Resistance, +150 HP", "+1% Fire Resistance, +50 Mana", "+1% Fire Resistance, +250 Cap",
"+2% Ice Resistance", "+1% Ice Resistance, +150 HP", "+1% Ice Resistance, +50 Mana", "+1% Ice Resistance, +250 Cap"
],
Paladin: [
"+200 HP", "+300 Mana", "+400 Cap", "+5% Mitigation",
"+2% Earth Resistance", "+1% Earth Resistance, +100 HP", "+1% Earth Resistance, +150 Mana", "+1% Earth Resistance, +200 Cap",
"+2% Energy Resistance", "+1% Energy Resistance, +100 HP", "+1% Energy Resistance, +150 Mana", "+1% Energy Resistance, +200 Cap",
"+2% Fire Resistance", "+1% Fire Resistance, +100 HP", "+1% Fire Resistance, +150 Mana", "+1% Fire Resistance, +200 Cap",
"+2% Ice Resistance", "+1% Ice Resistance, +100 HP", "+1% Ice Resistance, +150 Mana", "+1% Ice Resistance, +200 Cap"
],
Sorcerer: [
"+100 HP", "+600 Mana", "+200 Cap", "+5% Mitigation",
"+2% Earth Resistance", "+1% Earth Resistance, +50 HP", "+1% Earth Resistance, +300 Mana", "+1% Earth Resistance, +100 Cap",
"+2% Energy Resistance", "+1% Energy Resistance, +50 HP", "+1% Energy Resistance, +300 Mana", "+1% Energy Resistance, +100 Cap",
"+2% Fire Resistance", "+1% Fire Resistance, +50 HP", "+1% Fire Resistance, +300 Mana", "+1% Fire Resistance, +100 Cap",
"+2% Ice Resistance", "+1% Ice Resistance, +50 HP", "+1% Ice Resistance, +300 Mana", "+1% Ice Resistance, +100 Cap"
],
Druid: [
"+100 HP", "+600 Mana", "+200 Cap", "+5% Mitigation",
"+2% Earth Resistance", "+1% Earth Resistance, +50 HP", "+1% Earth Resistance, +300 Mana", "+1% Earth Resistance, +100 Cap",
"+2% Energy Resistance", "+1% Energy Resistance, +50 HP", "+1% Energy Resistance, +300 Mana", "+1% Energy Resistance, +100 Cap",
"+2% Fire Resistance", "+1% Fire Resistance, +50 HP", "+1% Fire Resistance, +300 Mana", "+1% Fire Resistance, +100 Cap",
"+2% Ice Resistance", "+1% Ice Resistance, +50 HP", "+1% Ice Resistance, +300 Mana", "+1% Ice Resistance, +100 Cap"
],
Monk: [
"+200 HP", "+200 Mana", "+500 Cap", "+5% Mitigation",
"+2% Earth Resistance", "+1% Earth Resistance, +100 HP", "+1% Earth Resistance, +100 Mana", "+1% Earth Resistance, +250 Cap",
"+2% Energy Resistance", "+1% Energy Resistance, +100 HP", "+1% Energy Resistance, +100 Mana", "+1% Energy Resistance, +250 Cap",
"+2% Fire Resistance", "+1% Fire Resistance, +100 HP", "+1% Fire Resistance, +100 Mana", "+1% Fire Resistance, +250 Cap",
"+2% Ice Resistance", "+1% Ice Resistance, +100 HP", "+1% Ice Resistance, +100 Mana", "+1% Ice Resistance, +250 Cap"
]
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

function betterRandomIndex(arrayLength) {
const array = new Uint32Array(1);
window.crypto.getRandomValues(array);
return array[0] % arrayLength;
}

function getRandomItemSecure(array) {
return array[betterRandomIndex(array.length)];
}

function closeModal(keepGoing) {
  document.getElementById("modal").style.display = "none";

  if (!keepGoing) {
    stopOpening = true;
    showBaskaExitMessage();
    setTimeout(() => location.reload(true), 4000);
  } else {
    stopOpening = false;
    desiredGemCount = 0;
    modalShown = false;
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
  <p><strong>Baśka says:</strong></p>
  <p style="font-style: italic;">
    Enough for today...<br>
    Go get some tea and come back later 💅
  </p>
</div>
`;
outputBox.classList.add("highlight");
}

function updateDesiredMods() {
  const prof = document.getElementById("profesja").value;
  const select = document.getElementById("desiredMod");
  select.innerHTML = '<option value="">(Null - you are not looking for any particular mod)</option>';

  const allMods = [...thirdMods.General, ...thirdMods[prof]].sort((a, b) => a.localeCompare(b));

  allMods.forEach(mod => {
    const option = document.createElement("option");
    option.textContent = mod;
    select.appendChild(option);
  });
}

function populateChartModSelect() {
  const prof = document.getElementById("profesja").value;
  const select = document.getElementById("chartModSelect");
  select.innerHTML = "";

  const allMods = [...thirdMods.General, ...thirdMods[prof]].sort((a, b) => a.localeCompare(b));

  allMods.forEach(mod => {
    const option = document.createElement("option");
    option.textContent = mod;
    option.value = mod;
    select.appendChild(option);
  });

  if (select.options.length > 0) {
    select.selectedIndex = 0;
    drawHitChart(select.value);
  }

  setTimeout(() => {
    if (select.value) drawHitChart(select.value);
  }, 0);
}



function toggleDesiredModSelect() {
  const wrapper = document.getElementById("desiredModWrapper");
  const size = document.getElementById("wielkosc").value;
  wrapper.style.display = size === "greater" ? "block" : "none";
}
function clearAfterDesiredChange() {
  updateHistory();
  drawHitChart();
  desiredGemCount = 0;
  document.getElementById("wynik").classList.remove("highlight");
}



let stopOpening = false;

function openGem(bypassCooldown = false) {
  if (!bypassCooldown && openGem.cooldown) return;

  if (!bypassCooldown) {
    openGem.cooldown = true;
    setTimeout(() => openGem.cooldown = false, 300);
  }

  if (stopOpening) return;

const prof = document.getElementById("profesja").value;
const size = document.getElementById("wielkosc").value;
const desired = document.getElementById("desiredMod").value;

const outputBox = document.getElementById("wynik");
outputBox.classList.remove("highlight");

let result = `<h2>${size.toUpperCase()} GEM 💠</h2>`;
let gemOpenCost = 0;
if (size === "lesser") gemOpenCost = 125000;
if (size === "regular") gemOpenCost = 1000000;
if (size === "greater") gemOpenCost = 6000000;

const gemBuyCost = parseInt(document.getElementById("gemBuyPrice").value) || 0;
const totalGemCost = gemOpenCost + gemBuyCost;

totalCost += totalGemCost;

updateLoss();
if (size === "lesser") lesserCount++;
else if (size === "regular") regularCount++;
else if (size === "greater") greaterCount++;

if (size === "greater" && desired) {
  desiredGemCount++;
}


result += `<p><span class='label'>Profession:</span> ${prof}</p>`;
result += `<p><span class='label'>Cost:</span> ${formatGold(totalGemCost)} (Opening: ${formatGold(gemOpenCost)} + Gem: ${formatGold(gemBuyCost)})</p>`;

let firstMod = getRandomItemSecure(mods[prof]);
result += `<p><span class='label'>Mod 1:</span> ${firstMod}</p>`;

if (size !== "lesser") {
let secondMod = getRandomItemSecure(secondMods);
result += `<p><span class='label'>Mod 2:</span> ${secondMod}</p>`;
}

let thirdMod = "";
if (size === "greater") {
  let allMods = [...thirdMods.General, ...thirdMods[prof]];
  for (let mod of allMods) {
    if (!(mod in modAttemptTrackers)) {
      modAttemptTrackers[mod] = 0;
    }
    modAttemptTrackers[mod]++;
  }

  let thirdPool = [...thirdMods.General, ...thirdMods[prof]];
  thirdMod = getRandomItemSecure(thirdPool);

result += `<p><span class='label'>Mod 3:</span> ${thirdMod}</p>`;

mod3Counts[thirdMod] = (mod3Counts[thirdMod] || 0) + 1;
updateHistory();

let attemptsBeforeHit = desiredGemCount;
let hit = false;

if (desired && thirdMod === desired && !modalShown) {
  modalShown = true;
  stopOpening = true;
  outputBox.classList.add("highlight");
  launchFireworks();
  showModal(attemptsBeforeHit);
}


hitAttempts.push({
  mod: thirdMod,
  attempts: modAttemptTrackers[thirdMod]
});
modAttemptTrackers[thirdMod] = 0;




}

result += `<p><span class='label'>Total cost:</span> ${formatGold(totalCost)}</p>`;
result += `<p><span class='label'>Lesser opened:</span> ${lesserCount}</p>`;
result += `<p><span class='label'>Regular opened:</span> ${regularCount}</p>`;
result += `<p><span class='label'>Greater opened:</span> ${greaterCount}</p>`;
if (desired) {
  result += `<p><span class='label'>Attempts for desired mod:</span> ${desiredGemCount}</p>`;
}

outputBox.innerHTML = result;
lastGemResult = result;
if (hitAttempts.length > 0) {
  drawHitChart();
}
const selectedMod = document.getElementById("chartModSelect").value;
drawHitChart(selectedMod);
}
function resetStats() {
  if (!confirm("Are you sure you want to reset all stats, attempts and drops?")) return;

  hitAttempts = [];
  mod3Counts = {};
  desiredGemCount = 0;
  lesserCount = 0;
  regularCount = 0;
  greaterCount = 0;
  totalCost = 0;
  lastGemResult = "";
  document.getElementById("desiredMod").selectedIndex = 0;
document.getElementById("chartModSelect").selectedIndex = 0;
document.getElementById("wielkosc").value = "lesser";
toggleDesiredModSelect();
  document.getElementById("modHistory").innerHTML = "";
  document.getElementById("wynik").innerHTML = `<p class="centered-text">Try your luck!</p>`;
  document.getElementById("lastHitCount").textContent = "–";
  document.getElementById("averageHitCount").textContent = "–";
  document.getElementById("multiOpenCount").value = "";

  if (window.hitChartInstance) {
    window.hitChartInstance.destroy();
    window.hitChartInstance = null;
  }

  updateLoss();
  modalShown = false;
}

function showModal(attempts) {
  const textBox = document.querySelector("#modal h2");
  textBox.innerHTML = `🎯 You've hit your desired gem after <span style="color: gold;">${attempts}</span> greater attempts!`;
  document.getElementById("modal").style.display = "flex";
}


function updateHistory() {
const list = document.getElementById("modHistory");
const desired = document.getElementById("desiredMod").value;
list.innerHTML = "";

const sortedMods = Object.entries(mod3Counts).sort((a, b) => b[1] - a[1]);
for (const [mod, count] of sortedMods) {
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

function drawHitChart(mod) {
  if (!mod || hitAttempts.length === 0 || hitAttempts.every(h => h.mod !== mod)) {
    document.getElementById("lastHitCount").textContent = "–";
    document.getElementById("averageHitCount").textContent = "–";

    if (window.hitChartInstance) {
      window.hitChartInstance.destroy();
      window.hitChartInstance = null;
    }

    const ctx = document.getElementById('hitChart').getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    return;
  }
  const filteredHits = hitAttempts.filter(h => h.mod === mod);
  const last = filteredHits.length ? filteredHits[filteredHits.length - 1].attempts : 0;
  const avg = filteredHits.length
    ? filteredHits.reduce((sum, h) => sum + h.attempts, 0) / filteredHits.length
    : 0;

  document.getElementById("lastHitCount").textContent = filteredHits.length ? last : "–";
  document.getElementById("averageHitCount").textContent = filteredHits.length ? avg.toFixed(2) : "–";

  const ctx = document.getElementById('hitChart').getContext('2d');
  if (window.hitChartInstance) {
    window.hitChartInstance.destroy();
  }
  Chart.register(window['chartjs-plugin-annotation']);
  window.hitChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: filteredHits.map((_, i) => i + 1),
      datasets: [{
        label: `Attempts before "${mod}" hit`,
        data: filteredHits.map(h => h.attempts),
        borderColor: 'gold',
        backgroundColor: 'rgba(255, 215, 0, 0.3)',
        borderWidth: 2,
        tension: 0.2,
        pointRadius: 5,
        pointBackgroundColor: '#ffcc00'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#ffe599' } },
        tooltip: {
          callbacks: {
            label: function(context) {
              const attempts = context.raw;
              const index = context.dataIndex + 1;
              return `(${attempts}) attempts)`;
            }
          }
        },
        annotation: {
          annotations: {
            averageLine: {
              type: 'line',
              yMin: avg,
              yMax: avg,
              borderColor: '#ff69b4',
              borderWidth: 2,
              borderDash: [6, 6],
              label: {
                display: true,
                content: `Avg: ${avg.toFixed(2)}`,
                color: '#ffb6d1',
                backgroundColor: '#2e1c07',
                font: {
                  weight: 'bold'
                },
                position: 'start'
              }
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Attempts' },
          ticks: { color: '#ffd28a' }
        },
        x: {
          title: { display: true, text: 'Hit # (chronological)' },
          ticks: { color: '#ffd28a' }
        }
      }
    }
        
  });
}

function drawHitChartFromSelector() {
  const selectedMod = document.getElementById("chartModSelect").value;
  drawHitChart(selectedMod);
}


function launchFireworks(count = 15) {
for (let i = 0; i < count; i++) {
const fw = document.createElement('div');
fw.classList.add('firework');
fw.style.left = Math.random() * 100 + 'vw';
fw.style.top = (30 + Math.random() * 40) + 'vh';
document.body.appendChild(fw);
setTimeout(() => fw.remove(), 2500);
}
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
const tcInput = document.getElementById("tcPrice").value;
const tcRate = parseInt(tcInput) > 0 ? parseInt(tcInput) : 40000;
value = value / tcRate;
display = value.toFixed(2) + " TC";
} else {
value = (value / 10000000) * 37;
display = value.toFixed(2) + " zł";
}

document.getElementById("lossValue").textContent = display;

const wynikBox = document.getElementById("wynik");
const html = wynikBox.innerHTML;

if (lastGemResult.includes("Total cost:")) {
const gemBuyCost = parseInt(document.getElementById("gemBuyPrice").value) || 0;
const size = document.getElementById("wielkosc").value;

let gemOpenCost = 0;
if (size === "lesser") gemOpenCost = 125000;
if (size === "regular") gemOpenCost = 1000000;
if (size === "greater") gemOpenCost = 6000000;

const totalGemCost = gemBuyCost + gemOpenCost;

const updatedResult = lastGemResult
.replace(/<span class='label'>Cost:<\/span>.*?<\/p>/i,
  `<span class='label'>Cost:</span> ${formatGold(totalGemCost)} (Opening: ${formatGold(gemOpenCost)} + Gem: ${formatGold(gemBuyCost)})</p>`)
.replace(/<span class='label'>Total cost:<\/span>.*?<\/p>/i,
  `<span class='label'>Total cost:</span> ${formatGold(totalCost)}</p>`);

document.getElementById("wynik").innerHTML = updatedResult;
}

}function spawnCandies(count = 15) {
const candyImages = [
'https://img.icons8.com/emoji/48/candy-emoji.png',
'https://img.icons8.com/emoji/48/lollipop-emoji.png',
'https://img.icons8.com/emoji/48/chocolate-bar.png',
'https://img.icons8.com/emoji/48/cookie-emoji.png'
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
setInterval(() => spawnCandies(8), 2500);
updateDesiredMods();
toggleDesiredModSelect();
populateChartModSelect();

const simulateBtn = document.getElementById("simulateBtn");
simulateBtn.addEventListener("click", () => {
  if (simulateBtn.classList.contains("cooldown")) return;

  const vocation = document.getElementById("perfectProf").value;
  const size = document.getElementById("perfectGemSize").value;
  const mod1 = document.getElementById("perfectMod1")?.value || null;
  const mod2 = document.getElementById("perfectMod2")?.value || null;
  const mod3 = document.getElementById("perfectMod3")?.value || null;

  simulateBtn.classList.add("cooldown");
  const originalText = simulateBtn.textContent;
  simulateBtn.textContent = "Simulating...";

  switchTab('perfect');

  setTimeout(() => {
    renderPerfectModInputs(mod1, mod2, mod3);
    simulatePerfectGemAttempts(100, vocation, size, mod1, mod2, mod3);
    drawPerfectGemChart();
    simulateBtn.classList.remove("cooldown");
    simulateBtn.textContent = originalText;
  }, 50);
});
const resetBtn = document.getElementById("resetPerfectChartBtn");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    perfectSimResults = [];
    document.getElementById("overallAttempts").textContent = "–";
    document.getElementById("minAttempt").textContent = "–";
    document.getElementById("maxAttempt").textContent = "–";

    if (window.perfectChartInstance) {
      window.perfectChartInstance.destroy();
      window.perfectChartInstance = null;
    }

    const ctx = document.getElementById("perfectHitChart")?.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  });
}
document.getElementById("resetPerfectChartBtn").addEventListener("click", () => {
  perfectSimResults = [];

  document.getElementById("overallAttempts").textContent = "–";
  document.getElementById("minAttempt").textContent = "–";
  document.getElementById("maxAttempt").textContent = "–";

  if (window.perfectChartInstance) {
    window.perfectChartInstance.destroy();
    window.perfectChartInstance = null;
  }

  const ctx = document.getElementById("perfectHitChart")?.getContext("2d");
  if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});
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
window.addEventListener('resize', () => {
  if (window.innerWidth < 1800) {
    document.querySelector('.sidebar').classList.remove('open');
  }
});


function switchTab(tab) {
  document.getElementById("gemTab").style.display = tab === "gem" ? "block" : "none";
  document.getElementById("chartsTab").style.display = tab === "charts" ? "block" : "none";
  document.getElementById("perfectTab").style.display = tab === "perfect" ? "block" : "none";

  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab-button[onclick="switchTab('${tab}')"]`).classList.add("active");

  if (tab === "charts" && hitAttempts.length > 0) {
    const selectedMod = document.getElementById("chartModSelect");
    if (selectedMod && selectedMod.value) {
      drawHitChart(selectedMod.value);
    }
  }
}


function openMultipleGems() {
  const countInput = document.getElementById("multiOpenCount");
  const count = parseInt(countInput.value);

  if (!count || count <= 0 || count > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  const openBtn = document.querySelector("button[onclick='openGem()']");
  const multiOpenBtn = document.querySelector("button[onclick='openMultipleGems()']");

  openBtn.classList.add("cooldown");
  multiOpenBtn.classList.add("cooldown");

  const originalText = multiOpenBtn.textContent;
  multiOpenBtn.textContent = "Cooldown...";

  let opened = 0;

  function openNext() {
    if (opened >= count || stopOpening) {
      multiOpenBtn.textContent = originalText;
      multiOpenBtn.classList.remove("cooldown");
      openBtn.classList.remove("cooldown");
      return;
    }

    openGem(true);
    opened++;

    setTimeout(openNext, 30);
  }

  openNext();
}



function renderPerfectModInputs(mod1Val = "", mod2Val = "", mod3Val = "") {
  const vocation = document.getElementById("perfectProf").value;
  const gemSize = document.getElementById("perfectGemSize").value;
  const container = document.getElementById("perfectModInputs");

  container.innerHTML = '';

  const modCount = gemSize === 'lesser' ? 1 : gemSize === 'regular' ? 2 : 3;

  for (let i = 1; i <= modCount; i++) {
    const label = document.createElement("label");
    label.textContent = `Desired Mod ${i}:`;

    const select = document.createElement("select");
    select.id = `perfectMod${i}`;
    select.style.marginBottom = "10px";

    const noneOption = document.createElement("option");
    noneOption.value = "";
    noneOption.textContent = "(None)";
    select.appendChild(noneOption);

    let options = [];
    if (i === 1) options = mods[vocation];
    else if (i === 2) options = secondMods;
    else if (i === 3) options = thirdMods[vocation].concat(thirdMods["General"]);

    options.forEach(mod => {
      const opt = document.createElement("option");
      opt.value = mod;
      opt.textContent = mod;
      select.appendChild(opt);
    });

    container.appendChild(label);
    container.appendChild(document.createElement("br"));
    container.appendChild(select);
    container.appendChild(document.createElement("br"));

    if (i === 1 && mod1Val) select.value = mod1Val;
    if (i === 2 && mod2Val) select.value = mod2Val;
    if (i === 3 && mod3Val) select.value = mod3Val;
  }

  if (window.perfectChartInstance) {
    window.perfectChartInstance.destroy();
    window.perfectChartInstance = null;
    const ctx = document.getElementById("perfectHitChart")?.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}




document.getElementById("calculatePerfectGemBtn").addEventListener("click", () => {
  const gemSize = document.querySelector('input[name="perfect-gem-size"]:checked')?.value;
  const modCount = parseInt(document.querySelector('input[name="perfect-mod-count"]:checked')?.value);
  const vocation = document.getElementById("perfectVocationSelect")?.value;

  if (!gemSize || !modCount || !vocation) return alert("Please select gem size, number of mods, and vocation.");

  const selectedMods = [];
  for (let i = 1; i <= modCount; i++) {
    const modSelect = document.getElementById(`perfectMod${i}`);
    if (!modSelect || !modSelect.value) return alert(`Please choose mod ${i}`);
    selectedMods.push(modSelect.value);
  }

  const mod1Total = mods[vocation].length;
  const mod2Total = secondMods.length;
  const mod3Total = (thirdMods[vocation].length + thirdMods["General"].length);

  let probability = 1;

  if (modCount >= 1) probability *= 1 / mod1Total;
  if (modCount >= 2) probability *= 1 / mod2Total;
  if (modCount === 3) probability *= 1 / mod3Total;

  const expectedTries = Math.round(1 / probability);
  const chance50 = Math.ceil(Math.log(1 - 0.5) / Math.log(1 - probability));
  const chance90 = Math.ceil(Math.log(1 - 0.9) / Math.log(1 - probability));
  const chance99 = Math.ceil(Math.log(1 - 0.99) / Math.log(1 - probability));

  const resultBox = document.getElementById("perfectResult");
  resultBox.innerHTML = `
    <p><strong>Chance:</strong> ${(probability * 100).toFixed(5)}%</p>
    <p><strong>Expected tries:</strong> ${expectedTries}</p>
    <p><strong>Tries for 50% chance:</strong> ${chance50}</p>
    <p><strong>Tries for 90% chance:</strong> ${chance90}</p>
    <p><strong>Tries for 99% chance:</strong> ${chance99}</p>
  `;
});



function calculatePerfectGemOdds() {
  const btn = document.getElementById("calculateBtn");
  if (btn.classList.contains("cooldown")) return;

  btn.classList.add("cooldown");
  const original = btn.textContent;
  btn.textContent = "Calculating...";
  setTimeout(() => {
    btn.classList.remove("cooldown");
    btn.textContent = original;
  }, 3000);
  const vocation = document.getElementById("perfectProf").value;
  const size = document.getElementById("perfectGemSize").value;

  const mod1 = document.getElementById("perfectMod1")?.value || null;
  const mod2 = document.getElementById("perfectMod2")?.value || null;
  const mod3 = document.getElementById("perfectMod3")?.value || null;

  const pool1 = mods[vocation] || [];
  const pool2 = secondMods;
  const pool3 = [...(thirdMods[vocation] || []), ...thirdMods.General];

  let prob = 1;

  if (size === "lesser" && mod1) {
    prob *= 1 / pool1.length;
  } else if (size === "regular" && mod1 && mod2) {
    prob *= (1 / pool1.length) * (1 / pool2.length);
  } else if (size === "greater" && mod1 && mod2 && mod3) {
    prob *= (1 / pool1.length) * (1 / pool2.length) * (1 / pool3.length);
  } else {
    document.getElementById("perfectResult").innerHTML = "<p>–</p>";
    document.getElementById("perfectResultBox").style.display = "block";
    return;
  }

  const expected = Math.round(1 / prob);
  const p100 = (prob * 100).toFixed(5);
  const chance50 = Math.ceil(Math.log(1 - 0.5) / Math.log(1 - prob));
  const chance90 = Math.ceil(Math.log(1 - 0.9) / Math.log(1 - prob));
  const chance99 = Math.ceil(Math.log(1 - 0.99) / Math.log(1 - prob));

  document.getElementById("perfectResult").innerHTML = `
    <p><strong>Chance per attempt:</strong> <span style="color: #8fff8f">${p100}%</span></p>
    <p><strong>Expected attempts:</strong> <span style="color: #ffd28a">${expected.toLocaleString()}</span></p>
    <p><strong>For 50% chance:</strong> ~${chance50.toLocaleString()} attempts</p>
    <p><strong>For 90% chance:</strong> ~${chance90.toLocaleString()} attempts</p>
    <p><strong>For 99% chance:</strong> ~${chance99.toLocaleString()} attempts</p>
  `;
  document.getElementById("perfectResultBox").style.display = "block";
}

function simulatePerfectGemOpenings() {
  const btn = document.getElementById("calculateBtn");
if (btn.classList.contains("cooldown")) return;

btn.classList.add("cooldown");
btn.textContent = "Simulating...";
setTimeout(() => {
  btn.classList.remove("cooldown");
  btn.textContent = "✨ Simulate 1 Attempt";
}, 800);

  const vocation = document.getElementById("perfectProf").value;
  const size = document.getElementById("perfectGemSize").value;

  const mod1 = document.getElementById("perfectMod1")?.value || null;
  const mod2 = document.getElementById("perfectMod2")?.value || null;
  const mod3 = document.getElementById("perfectMod3")?.value || null;

  const pool1 = mods[vocation];
  const pool2 = secondMods;
  const pool3 = [...thirdMods[vocation], ...thirdMods.General];

  const result = simulatePerfectGemAttempt(mod1, mod2, mod3, pool1, pool2, pool3);
  perfectSimResults.push(result);
  document.getElementById("perfectCalcResult").textContent = `Last attempt: ${result} tries`;

  if (perfectSimResults.length > 100) {
    perfectSimResults.shift();
  }

  drawPerfectGemChart();
}


function simulatePerfectGemAttempt(mod1, mod2, mod3, pool1, pool2, pool3) {
  let attempts = 0;
  while (true) {
    attempts++;
    const rand1 = getRandomItemSecure(pool1);
    const rand2 = getRandomItemSecure(pool2);
    const rand3 = getRandomItemSecure(pool3);

    const match1 = !mod1 || rand1 === mod1;
    const match2 = !mod2 || rand2 === mod2;
    const match3 = !mod3 || rand3 === mod3;

    if (match1 && match2 && match3) return attempts;
  }
}
function simulatePerfectGemAttempts(attempts = 100, vocation, size, mod1, mod2, mod3) {
  const pool1 = mods[vocation];
  const pool2 = secondMods;
  const pool3 = [...thirdMods[vocation], ...thirdMods.General];

  perfectSimResults = [];

  for (let i = 0; i < attempts; i++) {
    const tries = simulatePerfectGemAttempt(mod1, mod2, mod3, pool1, pool2, pool3);
    perfectSimResults.push(tries);
  }

  drawPerfectGemChart();
}


function drawPerfectGemChart() {
  const ctx = document.getElementById("perfectHitChart").getContext("2d");

  const min = Math.min(...perfectSimResults);
  const max = Math.max(...perfectSimResults);
  const avg = perfectSimResults.reduce((a, b) => a + b, 0) / perfectSimResults.length;

  document.getElementById("overallAttempts").textContent = perfectSimResults.length;
  document.getElementById("minAttempt").textContent = min;
  document.getElementById("maxAttempt").textContent = max;

  if (!window.perfectChartInstance) {
    window.perfectChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Attempts per Hit',
          data: [],
          borderColor: '#00ffcc',
          backgroundColor: 'rgba(0,255,204,0.2)',
          borderWidth: 2,
          tension: 0.2,
          pointRadius: 3,
          pointBackgroundColor: '#00ffaa'
        }]
      },
      options: {
        plugins: {
          legend: { labels: { color: '#ffe599' } },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.raw} attempts`
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Simulation #', color: '#ffd28a' },
            ticks: { color: '#ffd28a' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Attempts to Hit', color: '#ffd28a' },
            ticks: { color: '#ffd28a' }
          }
        }
      }
    });
  }

  const chart = window.perfectChartInstance;
  chart.data.labels = perfectSimResults.map((_, i) => i + 1);
  chart.data.datasets[0].data = [...perfectSimResults];
  chart.update();
}
