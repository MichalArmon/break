window.addEventListener("load", () => {
  const logo = document.getElementById("logoWrapper");
  const urlParams = new URLSearchParams(window.location.search);
  const from = urlParams.get("from");

  const isReload =
    performance.getEntriesByType("navigation")[0].type === "reload";

  const skipLogoPages = ["projects", "aboutme", "global", "project1"];
  if (skipLogoPages.includes(from) && !isReload) {
    logo.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    logo.style.display = "flex";
    document.body.style.overflow = "hidden";

    logo.addEventListener("click", () => {
      logo.style.display = "none";
      document.body.style.overflow = "auto";
    });

    // הוספה חשובה: גם בלי לחיצה, אחרי 3 שניות
    setTimeout(() => {
      if (logo.style.display !== "none") {
        logo.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }, 3000); // אחרי 3 שניות
  }

  if (window.history.replaceState) {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, null, cleanUrl);
  }
});
