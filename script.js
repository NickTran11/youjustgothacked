document.getElementById("soundBtn").addEventListener("click", () => {
  const audio = new Audio("prank-sound.mp3");
  audio.play().catch(() => {
    alert("Sound could not play until the browser allows it.");
  });
});
