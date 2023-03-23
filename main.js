const sections = Array.from(document.getElementsByTagName("section"));
const indicators = Array.from(document.getElementsByClassName("indicator"));
let currentSection = 0;

function setActiveSection(index) {
  currentSection = index;

  sections.forEach((section, i) => {
    section.style.transform = `translateY(${100 * (i - currentSection)}%)`;
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === currentSection);
  });
}

function handleScroll(event) {
  event.preventDefault();

  const delta = Math.sign(event.deltaY);
  const direction = delta > 0 ? 1 : -1;

  if (
    currentSection + direction >= 0 &&
    currentSection + direction < sections.length
  ) {
    setActiveSection(currentSection + direction);
  }
}

function handleIndicatorClick(event) {
  event.preventDefault();

  const index = indicators.indexOf(event.currentTarget);
  setActiveSection(index);
}

sections.forEach((section, i) => {
  section.style.transform = i === 0 ? "" : "translateY(100%)";
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", handleIndicatorClick);
  indicator.classList.toggle("active", i === currentSection);
});

window.addEventListener("wheel", handleScroll);
