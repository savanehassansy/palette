const container = document.querySelector(".ctn");
const refreshBtn = document.querySelector(".btn");
const loader = document.querySelector("loader");
const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "vous propose un choix de palette infini";
            }, 0);
            setTimeout(() => {
                text.textContent = "vous donne la possibilté de faire un clic pour copié la couleur de votre ";
            }, 4000);
            setTimeout(() => {
                text.textContent = "vous permet de changer vos couleurs aléatoirement en cliquant sur votre bouton";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad(); 
        // setInterval(textLoad, 12000);


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
  if (maxPaletteBoxes <= 10000) {
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
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Désolez nous ne pouvons pas fournir  ${maxPaletteBoxes} palettes à la fois, veuillez entrer un nombre en dessous de 10 000`,
    });
  }
};

generatePAlette();

//fonction appeler au click
refreshBtn.addEventListener("click", getNum);
refreshBtn.addEventListener("click", generatePAlette);

//fonction pour copié la couleur
const copyColor = (elem, hexVal) => {
  elem.querySelector(".hex");
  navigator.clipboard.writeText(hexVal).then(() => {
    Swal.fire({
      width: 300,
      icon: "success",
      title: "Couleur copié",
      showConfirmButton: false,
      timer: 1500,
    });
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

