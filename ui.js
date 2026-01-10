const chatTab = document.getElementById("tab-chat");
const updatesTab = document.getElementById("tab-updates");
const chat = document.getElementById("chat");
const updates = document.getElementById("updates");

chatTab.onclick = () => {
  chatTab.classList.add("active");
  updatesTab.classList.remove("active");
  chat.style.display = "flex";
  updates.style.display = "none";
};

updatesTab.onclick = () => {
  updatesTab.classList.add("active");
  chatTab.classList.remove("active");
  updates.style.display = "block";
  chat.style.display = "none";
};