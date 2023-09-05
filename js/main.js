const colorPickers = document.querySelectorAll(".color-picker");

const colorLeft = document.getElementById("color1");
const colorRight = document.getElementById("color2");

const showColorCodeLeft = document.querySelector(".color-code1");
const showColorCodeRight = document.querySelector(".color-code2");

const bodyBg = document.getElementById("body-bg");

const copied1 = document.querySelector("#copied1");
const copied2 = document.querySelector("#copied2");

const getColorCode = document.getElementById("color-code");

const gradientEl = document.getElementById("gradient");
const gradientCopied = document.getElementById("text-copied");

function setColor() {
  bodyBg.style.background =
    "linear-gradient( to right," +
    colorLeft.value +
    ", " +
    colorRight.value +
    ")";
  getCode();
}

colorPickers.forEach((colorPicker) => {
  colorPicker.addEventListener("input", () => {
    setColor();
    showColorCode();

    gradientCopied.textContent = "Click to copy";
  });
});

function showColorCode() {
  showColorCodeLeft.textContent = colorLeft.value;
  showColorCodeRight.textContent = colorRight.value;
}

function getCode() {
  getColorCode.innerHTML = `background: liner-gradient( to right, ${colorLeft.value}, ${colorRight.value})`;
}

gradientEl.addEventListener("click", () => {
  const codeAll =
    (getColorCode.textContent = `background: liner-gradient( to right, ${colorLeft.value}, ${colorRight.value})`);

  navigator.clipboard.writeText(codeAll);

  gradientCopied.textContent = "Copied!";
});

showColorCodeLeft.addEventListener("click", () => {
  const copyLeftColor = showColorCodeLeft.textContent;
  navigator.clipboard.writeText(copyLeftColor);
  copied1.classList.add("show");
  setTimeout(() => {
    copied1.classList.remove("show");
  }, 800);
});

showColorCodeRight.addEventListener("click", () => {
  const copyRightColor = showColorCodeRight.textContent;
  navigator.clipboard.writeText(copyRightColor);
  copied2.classList.add("show");
  setTimeout(() => {
    copied2.classList.remove("show");
  }, 800);
});
