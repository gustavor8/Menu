const button = document.getElementById("button");
let extend = true;

button.addEventListener('click', () => {
  const container = document.getElementById("container");
  container.style.width = isExtend(extend);
  extend = !extend;
});

const isExtend = (extend) => {
  return extend ? '5vw' : '16vw'
}