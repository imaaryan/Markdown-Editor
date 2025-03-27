const input = document.getElementById("input");
const preview = document.getElementById("viewer");
const resetBtn = document.getElementById("reset");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// function to toggle theme color
themeToggle.addEventListener("click", () => {
  const icon = themeToggle.querySelector("i");
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    icon.classList.replace("ri-sun-fill", "ri-moon-fill");
  } else {
    body.setAttribute("data-theme", "dark");
    icon.classList.replace("ri-moon-fill", "ri-sun-fill");
  }
});

// function form markdown converstion
function convertMarkdown() {
  preview.innerHTML = marked.parse(input.value);
}

// input eventlistner to render written text
input.addEventListener("input", convertMarkdown);
resetBtn.addEventListener("click", () => {
  input.value = "";
  preview.innerHTML = "";
});

// excecute written function
convertMarkdown();
