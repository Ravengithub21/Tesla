const topBar = document.querySelector("#top-bar");
const exteriorColorSection = document.getElementById("exterior-buttons");
const interiorColorSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");

//Handle Top Bar on Scrolls

const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

//Image Mapping

const exteriorImages = {
  "Stealth Grey": "./img/model-y-stealth-grey.jpg",
  "Pearl White": "./img/model-y-pearl-white.jpg",
  "Deep Blue": "./img/model-y-deep-blue-metallic.jpg",
  "Solid Black": "./img/model-y-solid-black.jpg",
  "Ultra Red": "./img/model-y-ultra-red.jpg",
  "Quick Silver": "./img/model-y-quicksilver.jpg",
};

const interiorImages = {
  Dark: "./img/model-y-interior-dark.jpg",
  Light: "./img/model-y-interior-light.jpg",
};

//Handle Color Selection

const handleColorButtonCLick = (event) => {
  let button;
  if (event.target.tagName === "IMG") {
    button = event.target.closest("button");
  } else if (event.target.tagName === "button") {
    button = event.target;
  }
  if (button) {
    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");
    // Change exterior Image
    if (event.currentTarget === exteriorColorSection) {
      const color = button.querySelector("img").alt;
      exteriorImage.src = exteriorImages[color];
    }
    if (event.currentTarget === interiorColorSection) {
      const color = button.querySelector("img").alt;
      interiorImage.src = interiorImages[color];
    }
  }
};

//Event Listeners
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
interiorColorSection.addEventListener("click", handleColorButtonCLick);
exteriorColorSection.addEventListener("click", handleColorButtonCLick);
