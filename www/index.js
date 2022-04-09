const h1 = document.querySelector("body > h1");
const prim = document.querySelector("body > span:first-child");
const quad = document.querySelector("body > span:nth-child(2)");
const sik = document.querySelector("body > span:nth-child(3)");
const primGraph = document.querySelector(".prim");
const quadGraph = document.querySelector(".quad");
const back = document.querySelector(".back");

function primClicked() {
  prim.classList.add("hidden");
  quad.classList.add("hidden");
  sik.classList.add("hidden");
  h1.innerText = "일차함수 그래프";
  primGraph.classList.remove("hidden");
  back.classList.remove("hidden");
  document.title = "일차함수 식 구하기";
}

function quadClicked() {
  prim.classList.add("hidden");
  quad.classList.add("hidden");
  sik.classList.add("hidden");
  h1.innerText = "이차함수 그래프";
  quadGraph.classList.remove("hidden");
  back.classList.remove("hidden");
  document.title = "이차함수 식 구하기";
}

function backClicked() {
  prim.classList.remove("hidden");
  quad.classList.remove("hidden");
  sik.classList.remove("hidden");
  h1.innerText = "";
  primGraph.classList.add("hidden");
  quadGraph.classList.add("hidden");
  back.classList.add("hidden");
  document.title = "일차함수와 이차함수 식 구하기";
}

prim.addEventListener("click", primClicked);
quad.addEventListener("click", quadClicked);
back.addEventListener("click", backClicked);
