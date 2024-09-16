function applyTheme(theme) {
  const element = document.documentElement;
  element.classList.toggle("dark", theme === "dark");
}

function setTheme(theme) {
  applyTheme(theme);
  localStorage.setItem("theme", theme);
}

function getStoredTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  return null;
}

function detectSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function changeTheme() {
  const currentTheme = getStoredTheme() || detectSystemTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

function preloadTheme() {
  const theme = getStoredTheme() || detectSystemTheme();
  setTheme(theme);
}

function initializeThemeButtons() {
  const headerThemeButton = document.getElementById("header-theme-button");
  headerThemeButton?.addEventListener("click", changeTheme);
}

window.onload = () => {
  document.addEventListener("astro:after-swap", initializeThemeButtons);
  initializeThemeButtons();
};

document.addEventListener("astro:after-swap", preloadTheme);

preloadTheme();
