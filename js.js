const correctPassword = "iloveyou";
const pages = ["page1", "page2", "page3", "page4"];
let currentPage = 0;

// Load letter.html into container
window.onload = () => {
  fetch("letter.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("letterContainer").innerHTML = data;
    });
};

function checkPassword() {
  const passwordInput = document.getElementById("password");
  const messageDiv = document.getElementById("message");
  const passwordSection = document.getElementById("passwordSection");
  const firstPage = document.getElementById("page1");
  const header = document.getElementById("headerSection");

  if (passwordInput.value === correctPassword) {
    passwordSection.style.display = "none";
    messageDiv.style.display = "none";
    firstPage.classList.add("active");
    currentPage = 0;
    header.style.display = "block";
  } else {
    messageDiv.innerHTML = "<p class='error'>Incorrect password. Please try again.</p>";
  }
}

function goToPage(pageNumber) {
  if (pageNumber < 1 || pageNumber > pages.length) return;

  const prevPageEl = document.getElementById(pages[currentPage]);
  const nextPageEl = document.getElementById(pages[pageNumber - 1]);
  const header = document.getElementById("headerSection");

  prevPageEl.classList.add("hide-left");

  setTimeout(() => {
    prevPageEl.classList.remove("active", "hide-left", "show-right");
    prevPageEl.style.display = "none";

    nextPageEl.style.display = "block";
    nextPageEl.classList.add("active", "show-right");

    currentPage = pageNumber - 1;

    if (currentPage === 0) {
      header.style.display = "block";
    } else {
      header.style.display = "none";
    }
  }, 400);
}

function popHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "emoji";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 100 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}
