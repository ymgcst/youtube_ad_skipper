function clickSkipAdButton() {
  let skipButton = document.querySelector(".ytp-ad-skip-button-slot");

  if (skipButton) {
    console.log("Skip button found");
    skipButton.click();
  }
}

console.log("init");
setInterval(clickSkipAdButton, 1000);
