const changeBg = document.querySelector(".nav_btn_changeBg");

changeBg.addEventListener("click", () => {
  let arrBg = ["/img/bg1.jpg", "/img/bg2.jpg", "/img/bg3.jpg", "/img/bg4.jpg", "/img/bg5.jpg", "/img/bg6.jpg", "/img/bg7.jpg", "/img/bg8.jpg"];
  let randomNum = Math.floor(Math.random() * arrBg.length);
  document.querySelector(".container").style.background = `url(${arrBg[randomNum]}) no-repeat center`;
  document.querySelector(".container").style.backgroundSize = `100% 100%`;
})