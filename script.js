const container = document.querySelector(".ctn");
const refreshBtn = document.querySelector(".btn");

//variables pour le nbre de palettes a afficher
let maxPaletteBoxes;

//fonction pour récupérer le nbre entré par l'utilisateur
function getNum() {
  maxPaletteBoxes = document.querySelector(".num").value;
}

getNum();

//fonction pour générer les palettes
const generatePAlette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    console.log(randomHex);

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div
          class="w-44 h-44 bg-[${randomHex}] rounded  active:animate-ping "
        ></div>
        <span class="hex m-3 font-medium text-lg uppercase text-gray-500 block text-center">${randomHex}</span>`;

    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

generatePAlette();

//fonction appeler au click
refreshBtn.addEventListener("click", getNum);
refreshBtn.addEventListener("click", generatePAlette);

//fonction pour copié la couleur
const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex");
  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "Copié";
    setTimeout(() => (colorElement.innerHTML = hexVal), 1000);
  });
};

//fonction pour afficher l'horloge
setInterval(function () {
  const clock = document.querySelector(".display");
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  clock.textContent = hr + ":" + min + ":" + sec;
});
