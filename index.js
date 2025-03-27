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

 input.value = `# Heading 1

## Heading 2

### Heading 3

This is **bold** text and this is *italic* text.

Here is a of [SwingUI](http://swingui.com).

## Lists

### Unordered List:
- Item 1
- Item 2


### Ordered List:
1. First item
2. Second item

## Code
\`\`\`
console.log("Hello! SwingUI")
\`\`\`
`;

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
