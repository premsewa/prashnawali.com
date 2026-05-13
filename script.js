(function () {
  "use strict";

  const grid = document.getElementById("grid");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");
  const elChaupai = document.getElementById("modal-chaupai");
  const elMeaningHi = document.getElementById("modal-meaning-hi");
  const elMeaningEn = document.getElementById("modal-meaning-en");
  const elReference = document.getElementById("modal-reference");
  const elContextEn = document.getElementById("modal-context-en");
  const elContextHi = document.getElementById("modal-context-hi");
  const elInferenceHi = document.getElementById("modal-inference-hi");
  const elInferenceEn = document.getElementById("modal-inference-en");
  const elSentiment = document.getElementById("modal-sentiment");

  let lastFocused = null;
  let selectedCell = null;

  // ===== Build grid =====
  const letters = buildGridLetters();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 225; i++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "cell";
    cell.textContent = letters[i];
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", `Cell ${i + 1}: ${letters[i]}`);
    cell.dataset.index = String(i);
    fragment.appendChild(cell);
  }
  grid.appendChild(fragment);

  // ===== Build chaupais archive (also serves as crawlable SEO content) =====
  const archive = document.getElementById("archive-list");
  if (archive) {
    const devNum = (n) => String(n).split("").map((d) => "०१२३४५६७८९"[+d]).join("");
    CHAUPAIS.forEach((c, i) => {
      const li = document.createElement("li");
      li.className = "archive-item";
      li.innerHTML = `
        <header class="archive-item-header">
          <span class="archive-num" lang="hi" aria-hidden="true">${devNum(i + 1)}</span>
          <span class="archive-tag sentiment-${c.sentiment}">${c.sentiment_label_hi} · ${c.sentiment_label_en}</span>
        </header>
        <blockquote class="archive-verse" lang="hi">${c.chaupai.replace(/\n/g, "<br>")}</blockquote>
        <p class="archive-reference" lang="hi">${c.reference}</p>
        <p class="archive-meaning archive-hi" lang="hi">${c.meaning_hi}</p>
        <p class="archive-meaning archive-en">${c.meaning_en}</p>
        <p class="archive-context" lang="hi">${c.context_hi}</p>
      `;
      archive.appendChild(li);
    });
  }

  // ===== Cell click =====
  grid.addEventListener("click", (e) => {
    const target = e.target.closest(".cell");
    if (!target) return;
    const idx = parseInt(target.dataset.index, 10);
    const chaupai = CHAUPAIS[idx % 9];

    // Highlight the chosen cell — persists through the modal's lifetime
    // so the user gets uninterrupted visual feedback from the tap.
    if (selectedCell) selectedCell.classList.remove("selected");
    target.classList.add("selected");
    selectedCell = target;

    openModal(chaupai);
  });

  // ===== Modal =====
  function openModal(c) {
    elChaupai.textContent = c.chaupai;
    elMeaningHi.textContent = c.meaning_hi;
    elMeaningEn.textContent = c.meaning_en;
    elReference.textContent = c.reference;
    elContextEn.textContent = c.context_en;
    elContextHi.textContent = c.context_hi;
    elInferenceHi.textContent = c.inference_hi;
    elInferenceEn.textContent = c.inference_en;

    elSentiment.className = "modal-tag sentiment-" + c.sentiment;
    elSentiment.textContent = `${c.sentiment_label_hi} · ${c.sentiment_label_en}`;

    lastFocused = document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    // Scroll modal content to top so each fresh reading starts at the chaupai.
    const card = modal.querySelector(".modal-card");
    if (card) card.scrollTop = 0;
    // Move focus into the modal for accessibility.
    requestAnimationFrame(() => closeBtn.focus());
  }

  function closeModal() {
    if (modal.getAttribute("aria-hidden") === "true") return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (selectedCell) {
      selectedCell.classList.remove("selected");
      selectedCell = null;
    }
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  // Click on backdrop or X closes. Use closest() so taps on the SVG icon inside
  // the close button still resolve to the button's data-close attribute.
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });

  // Escape closes.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  // ===== Theme toggle =====
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const explicit = document.documentElement.getAttribute("data-theme");
      const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const currentlyDark = explicit ? explicit === "dark" : systemDark;
      const next = currentlyDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
})();
