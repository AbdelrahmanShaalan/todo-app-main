//Light and dark theme
window.addEventListener("load" , themes())

function themes() {
  if (
    localStorage.getItem("theme") == "light" ||
    localStorage.getItem("theme") == null
  ) {
    document.querySelector(".parent").classList.remove("dark");
  } else if (localStorage.getItem("theme") == "dark") {
    document.querySelector(".parent").classList.add("dark");
  }
};

document.querySelector("#changeTheme").onclick = () => {
  if (document.querySelector(".parent").classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    document.querySelector(".parent").classList.remove("dark");
  } else if (!document.querySelector(".parent").classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    document.querySelector(".parent").classList.add("dark");
  }
};