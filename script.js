document.addEventListener("defer", () => {
  document.querySelectorAll(".section h2").forEach((header) => {
    header.addEventListener("click", () => {
      header.classList.toggle("collapsed");
      header.nextElementSibling.classList.toggle("collapsed");
      header.setAttribute(
        "aria-expanded",
        header.classList.contains("collapsed") ? "false" : "true"
      );
    });
    // Initialize ARIA attributes
    header.setAttribute("aria-expanded", "true");
    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    header.nextElementSibling.setAttribute("aria-hidden", "false");
  });

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "H2" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      e.target.click();
    }
  });
});
