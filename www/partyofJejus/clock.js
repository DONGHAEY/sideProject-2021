const clockTitle = document.querySelector(".clock");

function getTime() {
  const date = new Date();
  const day = date.getDate();
  clockTitle.innerText = `${date}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
