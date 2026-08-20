(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (!toggle) return;

  const applyTheme = (theme, persist = false) => {
    const isDark = theme === "dark";

    root.dataset.theme = isDark ? "dark" : "light";
    root.style.colorScheme = isDark ? "dark" : "light";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeColor?.setAttribute("content", isDark ? "#0b1220" : "#f6f8fb");

    if (persist) {
      try {
        localStorage.setItem("vida-theme", isDark ? "dark" : "light");
      } catch (error) {
        // The selected theme still applies when storage is unavailable.
      }
    }
  };

  toggle.hidden = false;
  applyTheme(root.dataset.theme);

  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
})();
