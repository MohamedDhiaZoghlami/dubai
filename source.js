let menuBtn = document.querySelector(".open");
let items = document.querySelector(".navbar__items");
let closeBtn = document.querySelector(".close");
let dropBtn = document.querySelector(".dropbtn");
let menuItems = document.querySelector(".dropdown-content");
let here = document.querySelector(".here");
let shown = document.querySelector(".shown");
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  window.location = "https://the-dubai-life.com";
});

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    items.classList.add("show");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    items.classList.remove("show");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
  });
}
let a = 0;
dropBtn.addEventListener("click", () => {
  if (a == 0) {
    here.classList.add("shown");
    a = 1;
  } else {
    here.classList.remove("shown");
    a = 0;
  }
});

/*===========================================================*/
let ticket = document.getElementById("ticket");
let ticketPara = document.querySelector(".ticketPara");
let ticketBonus = document.querySelector(".tickets");
let pricePara = document.querySelector(".pricePara");
let prix = document.querySelector(".price");
let prixFinale = document.querySelector(".finalPrice");

ticket.addEventListener("keyup", () => {
  let promotion = 0;
  let price = 30;
  let totalPrice;
  let finalPrice = price * (1 - promotion / 100);
  if (ticket.value) {
    ticketPara.style.display = "block";
  }
  let ticketNumber = Math.floor(ticket.value / 4);
  ticketBonus.innerText = `${ticketNumber} tickets bonus`;
  if (!promotion) {
    pricePara.style.display = "block";
    prix.innerText = finalPrice * ticket.value;
  } else {
    pricePara.style.display = "block";
    prix.style.color = "#94514f";
    prix.innerText = price * ticket.value;
    prix.style.textDecoration = "line-through";
    prixFinale.innerText = finalPrice * ticket.value;
  }
});
