const tabs = document.querySelectorAll(".tablist li");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 移除所有 active
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // 當前點擊的 tab 加 active
    tab.classList.add("active");
    const targetId = tab.getAttribute("data-tab");
    document.getElementById(targetId).classList.add("active");
  });
});
