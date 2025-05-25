document.addEventListener("DOMContentLoaded", () => {
  if (!window.dashboardData) return;

  const {
    letters = 0,
    diary = 0,
    secrets = 0,
    handbooks = 0,
    notesWords = 0,
  } = window.dashboardData;

  const cards = document.querySelectorAll(".card");
  if (cards[0]) {
    cards[0].querySelector(".count").textContent = letters;
    cards[0].querySelector(".label").textContent = "封情书";
  }

  if (cards[1]) {
    cards[1].querySelector(".count").textContent = diary;
    cards[1].querySelector(".label").textContent = "篇日记";
  }

  if (cards[3]) {
    cards[3].querySelector(".count").textContent = notesWords;
    cards[3].querySelector(".label").textContent = "字留言纸条";
  }

  if (cards[3]) {
    cards[3].querySelector(".count").textContent = secrets;
    cards[3].querySelector(".label").textContent = "条悄悄话";
  }

  if (cards[4]) {
    cards[4].querySelector(".count").textContent = handbooks;
    cards[4].querySelector(".label").textContent = "张手帐图图";
  }
});