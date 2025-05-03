var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim2"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "./js/data2.json",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice", // זה חשוב!
  }, // או 'anim/ANIM2.json' אם שמת אותו בתיקייה
});
setInterval(function () {
  animation.goToAndPlay(0, true);
}, 3000);
