interface Window {
  stickyHeaderFuncionality: () => void;
  evaluateHeaderPosition: () => void;
  applyMenuItemClasses: () => void;
}

let headerElement: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", () => {
  headerElement = document.getElementById("header");

  window.stickyHeaderFuncionality();
  window.applyMenuItemClasses();
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

window.applyMenuItemClasses = () => {
  const menuItems = document.querySelectorAll<HTMLAnchorElement>("nav a");
  menuItems.forEach((menuItem) => {
    if (menuItem.pathname === window.location.pathname) {
      menuItem.classList.add("text-white");
    }
  });
};
