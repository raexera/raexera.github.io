interface Window {
  darkMode: boolean;
  stickyHeaderFuncionality: () => void;
  evaluateHeaderPosition: () => void;
  applyMenuItemClasses: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

window.darkMode = false;

const stickyClasses: string[] = ["fixed", "h-14"];
const unstickyClasses: string[] = ["absolute", "h-20"];
const stickyClassesContainer: string[] = [
  "border-neutral-300/50",
  "bg-white/80",
  "dark:border-neutral-600/40",
  "dark:bg-neutral-900/60",
  "backdrop-blur-2xl",
];
const unstickyClassesContainer: string[] = ["border-transparent"];
let headerElement: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", () => {
  headerElement = document.getElementById("header");

  if (localStorage.getItem("dark_mode") === "true") {
    window.darkMode = true;
    showNight();
  } else {
    showDay();
  }

  window.stickyHeaderFuncionality();
  window.applyMenuItemClasses();
  window.evaluateHeaderPosition();
  mobileMenuFunctionality();
});

window.stickyHeaderFuncionality = () => {
  window.addEventListener("scroll", () => {
    window.evaluateHeaderPosition();
  });
};

window.evaluateHeaderPosition = () => {
  if (window.scrollY > 16 && headerElement) {
    headerElement.firstElementChild?.classList.add(...stickyClassesContainer);
    headerElement.firstElementChild?.classList.remove(
      ...unstickyClassesContainer,
    );
    headerElement.classList.add(...stickyClasses);
    headerElement.classList.remove(...unstickyClasses);
    document.getElementById("menu")?.classList.add("top-[56px]");
    document.getElementById("menu")?.classList.remove("top-[75px]");
  } else if (headerElement) {
    headerElement.firstElementChild?.classList.remove(
      ...stickyClassesContainer,
    );
    headerElement.firstElementChild?.classList.add(...unstickyClassesContainer);
    headerElement.classList.add(...unstickyClasses);
    headerElement.classList.remove(...stickyClasses);
    document.getElementById("menu")?.classList.remove("top-[56px]");
    document.getElementById("menu")?.classList.add("top-[75px]");
  }
};

document.getElementById("darkToggle")?.addEventListener("click", () => {
  document.documentElement.classList.add("duration-300");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.removeItem("dark_mode");
    showDay(true);
  } else {
    localStorage.setItem("dark_mode", "true");
    showNight(true);
  }
});

function showDay(animate: boolean = false): void {
  const sunElement = document.getElementById("sun");
  const moonElement = document.getElementById("moon");

  sunElement?.classList.remove("setting");
  moonElement?.classList.remove("rising");

  let timeout = 0;

  if (animate) {
    timeout = 500;
    moonElement?.classList.add("setting");
  }

  setTimeout(() => {
    moonElement?.classList.add("hidden");
    sunElement?.classList.remove("hidden");

    if (animate) {
      document.documentElement.classList.remove("dark");
      sunElement?.classList.add("rising");
    }
  }, timeout);
}

function showNight(animate: boolean = false): void {
  const sunElement = document.getElementById("sun");
  const moonElement = document.getElementById("moon");

  sunElement?.classList.remove("rising");
  moonElement?.classList.remove("setting");

  let timeout = 0;

  if (animate) {
    timeout = 500;
    sunElement?.classList.add("setting");
  }

  setTimeout(() => {
    sunElement?.classList.add("hidden");
    moonElement?.classList.remove("hidden");

    if (animate) {
      document.documentElement.classList.add("dark");
      moonElement?.classList.add("rising");
    }
  }, timeout);
}

window.applyMenuItemClasses = () => {
  const menuItems = document.querySelectorAll<HTMLAnchorElement>("#menu a");
  menuItems.forEach((menuItem) => {
    if (menuItem.pathname === window.location.pathname) {
      menuItem.classList.add("text-neutral-900", "dark:text-white");
    }
  });
};

function mobileMenuFunctionality(): void {
  document.getElementById("openMenu")?.addEventListener("click", () => {
    window.openMobileMenu();
  });

  document.getElementById("closeMenu")?.addEventListener("click", () => {
    window.closeMobileMenu();
  });
}

window.openMobileMenu = () => {
  document.getElementById("openMenu")?.classList.add("hidden");
  document.getElementById("closeMenu")?.classList.remove("hidden");
  document.getElementById("menu")?.classList.remove("hidden");
  const mobileMenuBg = document.getElementById("mobileMenuBackground");
  mobileMenuBg?.classList.add("opacity-0");
  mobileMenuBg?.classList.remove("hidden");

  setTimeout(() => {
    mobileMenuBg?.classList.remove("opacity-0");
  }, 1);
};

window.closeMobileMenu = () => {
  document.getElementById("closeMenu")?.classList.add("hidden");
  document.getElementById("openMenu")?.classList.remove("hidden");
  document.getElementById("menu")?.classList.add("hidden");
  document.getElementById("mobileMenuBackground")?.classList.add("hidden");
};
