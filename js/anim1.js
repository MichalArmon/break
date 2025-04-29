var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"), // האלמנט שבו תוצג האנימציה
  renderer: "svg", // שיטת רינדור - svg / canvas / html
  loop: false, // האם הלופ יחזור
  autoplay: true, // האם האנימציה תתחיל מיד
  path: "data.json", // הנתיב לקובץ ה-JSON של האנימציה
});
// לגרום לה להתנגן שוב כל 3 שניות:
setInterval(function () {
  animation.goToAndPlay(0, true);
}, 4000);
