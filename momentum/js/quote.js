const changeBackground = document.querySelector(".nav_btn_changeBg");

let quoteArr = [
  {quote : "아무런 위험을 감수하지 않는다면 더 큰 위험을 감수하게 될 것이다.", author : "Erica Jong"},
  {quote : "중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다.", author : "William Somerset Maugham"},
  {quote : "우리 모두는 인생에서 만회할 기회라 할 수 있는 큰 변화를 경험한다.", author : "Harrison Ford"},
  {quote : "의심으로 가득 찬 마음은 승리로의 여정에 집중할 수 없다.", author : "Arthur Golden"},
  {quote : "성공은 영원하지 않고, 실패는 치명적이지 않다.", author : "Mike Ditka"},
  {quote : "당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라.", author : "Mother Teresa"},
  {quote : "이 사랑의 꽃봉오리는 여름날 바람에 마냥 부풀었다가, 다음 만날 때엔 예쁘게 꽃필 거예요.", author : "William Shakespeare"},
  {quote : "쉬운 일을 어려운 일처럼, 어려운 일을 쉬운 일처럼 대하라. 전자는 자신감이 잠들지 않게, 후자는 자신감을 잃지 않기 위함이다.", author : "Baltasar Gracian"}
]

changeBackground.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * quoteArr.length);
  const resultQuote = quoteArr[randomNum];
  document.querySelector(".quote_content").innerText = resultQuote.quote;
  document.querySelector(".quote_author").innerText = resultQuote.author;
})