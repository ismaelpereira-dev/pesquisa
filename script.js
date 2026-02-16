
//scrool lizo

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

//mobile menu

const header = document.getElementById("header-portifolio");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("#link ul");

let lastScroll = 0;

/* =========================
   SCROLL – HEADER
========================= */
window.addEventListener("scroll", () => {
  if (window.innerWidth > 1024) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add("hide");
    menu.classList.remove("ativo"); // fecha menu junto
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

/* =========================
   ABRIR / FECHAR MENU
========================= */
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // MUITO IMPORTANTE
  menu.classList.toggle("ativo");
});

/* =========================
   CLIQUE FORA FECHA MENU
========================= */
document.addEventListener("click", () => {
  menu.classList.remove("ativo");
});

/* =========================
   CLIQUE NO MENU NÃO FECHA
========================= */
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* =========================
   LINK FECHA MENU
========================= */
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});

  const members = document.querySelectorAll('.member');
  let index = 0;

  setInterval(() => {
    members[index].classList.remove('active');
    index = (index + 1) % members.length;
    members[index].classList.add('active');
  }, 3000);
