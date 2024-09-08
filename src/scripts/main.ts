interface Window {
  stickyHeaderFuncionality: () => void;
  evaluateHeaderPosition: () => void;
}

let headerElement: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", () => {
  headerElement = document.getElementById("header");

  window.stickyHeaderFuncionality();
  window.evaluateHeaderPosition();
});

window.stickyHeaderFuncionality = () => {
  window.addEventListener("scroll", () => {
    window.evaluateHeaderPosition();
  });
};

window.evaluateHeaderPosition = () => {
  if (window.scrollY > 16 && headerElement) {
    headerElement.classList.add("h-14");
    headerElement.classList.remove("h-[75px]");
  } else if (headerElement) {
    headerElement.classList.remove("h-14");
    headerElement.classList.add("h-[75px]");
  }
};
