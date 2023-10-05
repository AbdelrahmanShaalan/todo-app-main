//Light and dark theme
window.addEventListener("load" , themes())

function themes() {
  console.log("ON");
  if (
    localStorage.getItem("theme") == "light" ||
    localStorage.getItem("theme") == null
  ) {
    document.querySelector(".parent").classList.remove("dark");
    console.log("Light Theme Active");
  } else if (localStorage.getItem("theme") == "dark") {
    document.querySelector(".parent").classList.add("dark");
    console.log("Dark Theme Active");
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