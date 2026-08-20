(() => {
  const hero = document.querySelector(".hero");
  const linksBox = document.getElementById("links");

  if (!hero || !linksBox) return;

  // Сохраняем ТЕКУЩИЙ список ссылок как есть.
  // Поэтому новые/изменённые кнопки из script.js не потеряются.
  const normalLinksMarkup = linksBox.innerHTML;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "secret-trigger";
  trigger.setAttribute("aria-label", "Открыть секретную страницу");
  trigger.setAttribute("aria-expanded", "false");
  trigger.innerHTML = `
    <span class="secret-heart" aria-hidden="true">💗</span>
    <span class="secret-arrow" aria-hidden="true">›</span>
  `;
  hero.appendChild(trigger);

  function secretCard({ title, subtitle, icon, url }) {
    const a = document.createElement("a");
    a.className = "card secret-site-card";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <div class="icon">${icon}</div>
      <div>
        <div class="title">${title}</div>
        <div class="sub">${subtitle}</div>
      </div>
      <div class="go">›</div>
    `;
    return a;
  }

  function showSecretLinks() {
    linksBox.classList.add("secret-mode");
    linksBox.innerHTML = "";

    const intro = document.createElement("div");
    intro.className = "secret-heading";
    intro.innerHTML = `
      <div class="secret-kicker">СЕКРЕТНАЯ ССЫЛКА</div>
      <div class="secret-caption">Ты всё-таки нашёл сердечко 💗</div>
    `;

    const siteLink = secretCard({
      title: "Немного обо мне 💗",
      subtitle: "Видео и маленький анонимный опрос",
      icon: "♡",
      url: "https://fellowkjhj.github.io/KirpichKrisaVideo/"
    });

    const back = document.createElement("button");
    back.type = "button";
    back.className = "card secret-back";
    back.innerHTML = `
      <div class="icon">←</div>
      <div>
        <div class="title">Назад</div>
        <div class="sub">Вернуться ко всем ссылкам</div>
      </div>
      <div class="go">‹</div>
    `;
    back.addEventListener("click", showNormalLinks);

    linksBox.append(intro, siteLink, back);
    trigger.classList.add("is-active");
    trigger.setAttribute("aria-expanded", "true");

    linksBox.animate(
      [
        { opacity: 0, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 220, easing: "ease-out" }
    );

    linksBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showNormalLinks() {
    linksBox.innerHTML = normalLinksMarkup;
    linksBox.classList.remove("secret-mode");
    trigger.classList.remove("is-active");
    trigger.setAttribute("aria-expanded", "false");

    linksBox.animate(
      [
        { opacity: 0, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 220, easing: "ease-out" }
    );
  }

  trigger.addEventListener("click", () => {
    if (trigger.classList.contains("is-active")) {
      showNormalLinks();
    } else {
      showSecretLinks();
    }
  });
})();
