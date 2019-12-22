const refs = {
  create: document.querySelector('#controls button[data-action="render"]'),
  clear: document.querySelector('#controls button[data-action="destroy"]'),
  box: document.getElementById("boxes")
};

const randomColor = (r, g, b) => {
  r = Math.floor(Math.random() * (255 - 0)) + 0;
  g = Math.floor(Math.random() * (255 - 0)) + 0;
  b = Math.floor(Math.random() * (255 - 0)) + 0;
  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
};

let totalPx = 20;
const pixelSize = () => {
  return (totalPx += 10);
};

const createBoxes = function(amount) {
  amount = document.querySelector("#controls input").value;

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    refs.box.appendChild(newBox);
    newBox.className = "newBox";
    newBox.style.backgroundColor = "rgb" + randomColor();
    newBox.style.margin = "5px";
    newBox.style.width = pixelSize() + "px";
    newBox.style.height = pixelSize() + "px";
  }
};

const destroyBoxes = function() {
  while (refs.box.firstChild) {
    refs.box.removeChild(refs.box.firstChild);
  }
};

refs.create.addEventListener("click", createBoxes);
refs.clear.addEventListener("click", destroyBoxes);

export default refs;



const div = document.querySelector('#boxes');
const button = document.querySelector("#btn-8");

const renderCreate = document.querySelector('#btn-8[data-action="render"]');
const renderDestroy = document.querySelector('#btn-8[data-action="destroy"]');

renderCreate.addEventListener("click", renderBox);
renderDestroy.addEventListener('click',destroyBox)

function renderBox(e) {
    let inp = document.querySelector('#input-8');
    createBox (inp.value);
}

function createBox(amount) {
    const startSize = 30;
    for(let i=0; i<amount; i++){
    let elemDiv = document.createElement('div');
    div.appendChild(elemDiv);
    let addSize = i *10;
    elemDiv.style.backgroundColor = random_bg_color() ;
    elemDiv.style.width = startSize + addSize +"px";
    elemDiv.style.height = startSize + addSize +"px";
    }
}


function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return bgColor;
}

function destroyBox(amount) {
    let elemDivDestr = document.querySelector('#boxes');
    elemDivDestr.innerHTML = "";
}