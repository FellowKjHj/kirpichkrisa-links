const links = [
  {
    title: "Чат для Мурманчан (общение и организация)",
    subtitle: "Telegram-чат",
    icon: "💬",
    url: "https://t.me/+IaDeJPCHFYA5ZGYy"
  },
  {
    title: "Telegram",
    subtitle: "Канал — новости и анонсы",
    icon: "TG",
    url: "https://t.me/kirpichkrisa"
  },
  {
    title: "Telegram чат",
    subtitle: "Чат с подписчиками",
    icon: "💬",
    url: "https://t.me/+bdpeQNo7bZc4Mzdi"
  },
  {
    title: "TikTok",
    subtitle: "Ролики и стримы",
    icon: "TT",
    url: "https://www.tiktok.com/@kirpichkrisa"
  },
  {
    title: "Twitch",
    subtitle: "Стримы",
    icon: "TW",
    url: "https://www.twitch.tv/kirpich_krisa"
  },
  {
    title: "YouTube",
    subtitle: "Перезаливы стримов",
    icon: "YT",
    url: "https://www.youtube.com/@Kirpichkrisa"
  },
  {
    title: "Поддержать безработного",
    subtitle: "DonationAlerts",
    icon: "₽",
    url: "https://www.donationalerts.com/r/kirpichkrisa"
  }
];

const box = document.getElementById("links");

for (const item of links) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = item.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  a.innerHTML = `
    <div class="icon">${item.icon}</div>
    <div>
      <div class="title">${item.title}</div>
      <div class="sub">${item.subtitle}</div>
    </div>
    <div class="go">›</div>
  `;

  box.appendChild(a);
}

document.getElementById("year").textContent = new Date().getFullYear();
