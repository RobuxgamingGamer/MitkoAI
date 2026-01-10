// ui.js — CLEAN, SAFE, MOBILE-FIRST

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ UI loaded");

  const chatTab = document.getElementById("tab-chat");
  const updatesTab = document.getElementById("tab-updates");
  const chat = document.getElementById("chat");
  const updates = document.getElementById("updates");

  // SAFETY CHECK
  if (!chatTab || !updatesTab || !chat || !updates) {
    console.error("❌ UI elements missing", {
      chatTab,
      updatesTab,
      chat,
      updates
    });
    alert("UI ERROR: Missing elements");
    return;
  }

  // FORCE INITIAL STATE
  chat.style.display = "flex";
  updates.style.display = "none";
  chatTab.classList.add("active");
  updatesTab.classList.remove("active");

  // CHAT TAB
  chatTab.addEventListener("click", () => {
    console.log("👉 Chat clicked");
    chatTab.classList.add("active");
    updatesTab.classList.remove("active");
    chat.style.display = "flex";
    updates.style.display = "none";
  });

  // UPDATES TAB
  updatesTab.addEventListener("click", () => {
    console.log("👉 Updates clicked");
    updatesTab.classList.add("active");
    chatTab.classList.remove("active");
    updates.style.display = "block";
    chat.style.display = "none";
  });
});