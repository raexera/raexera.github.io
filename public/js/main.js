function applyTheme(theme) {
  const element = document.documentElement;
  element.classList.toggle("dark", theme === "dark");
  localStorage.theme = theme;
}

function disableTransitionsTemporarily() {
  const css = document.createElement("style");
  css.textContent = `
    * {
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -o-transition: none !important;
      -ms-transition: none !important;
      transition: none !important;
    }
  `;
  document.head.appendChild(css);
  window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

function changeTheme() {
  const currentTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  disableTransitionsTemporarily();
  applyTheme(newTheme);
}

function getUserPreferredTheme() {
  const storedTheme = localStorage.theme;
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function preloadTheme() {
  const theme = getUserPreferredTheme();
  applyTheme(theme);
}

function initializeThemeButtons() {
  const headerThemeButton = document.getElementById("header-theme-button");
  const drawerThemeButton = document.getElementById("drawer-theme-button");

  headerThemeButton?.addEventListener("click", changeTheme);
  drawerThemeButton?.addEventListener("click", changeTheme);
}

function onScroll() {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
}

window.onload = () => {
  document.addEventListener("astro:after-swap", initializeThemeButtons);
  initializeThemeButtons();
};

document.addEventListener("astro:after-swap", preloadTheme);
document.addEventListener("scroll", onScroll);
preloadTheme();
