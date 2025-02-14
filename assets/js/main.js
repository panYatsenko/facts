// Form open/close
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close the form";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
