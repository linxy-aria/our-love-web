
document.addEventListener("DOMContentLoaded", async () => {
  // 留言统计（字数）
  let totalNotesLength = 0;
  if (typeof notesData === "object") {
    for (const day in notesData) {
      const messages = notesData[day];
      messages.forEach(msg => {
        totalNotesLength += msg.length;
      });
    }
  }
  const noteCard = document.querySelectorAll(".card")[2];
  if (noteCard) {
    noteCard.querySelector(".count").textContent = totalNotesLength;
    noteCard.querySelector(".label").textContent = "字留言纸条";
  }

  // 文件夹统计封装
  async function countFiles(path, ext) {
    try {
      const response = await fetch(path);
      const text = await response.text();
      const parser = new DOMParser();
      const html = parser.parseFromString(text, "text/html");
      const links = html.querySelectorAll("a");
      let count = 0;
      links.forEach(link => {
        if (link.href.endsWith(ext)) count++;
      });
      return count;
    } catch (e) {
      console.warn("目录读取失败：", path);
      return 0;
    }
  }

  // 情书封数
  const letterCount = await countFiles("letters/", ".html");
  const letterCard = document.querySelectorAll(".card")[0];
  if (letterCard) letterCard.querySelector(".count").textContent = letterCount;

  // 日记天数
  const diaryCount = await countFiles("diary/", ".html");
  const diaryCard = document.querySelectorAll(".card")[1];
  if (diaryCard) diaryCard.querySelector(".count").textContent = diaryCount;

  // 悄悄话条数
  const secretCount = await countFiles("secrets/", ".html");
  const secretCard = document.querySelectorAll(".card")[3];
  if (secretCard) secretCard.querySelector(".count").textContent = secretCount;

  // 手帐图图数量
  const handbookCount = await countFiles("handbooks/", ".png");
  const handbookCard = document.querySelectorAll(".card")[4];
  if (handbookCard) handbookCard.querySelector(".count").textContent = handbookCount;
});
