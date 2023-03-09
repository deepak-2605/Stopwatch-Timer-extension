// background.js

let timer = 0;
let intervalId = null;

function startTimer() {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(() => {
    timer++;
    chrome.storage.local.set({ timer: timer });
  }, 1000);
}

function stopTimer() {
  if (intervalId === null) {
    return;
  }

  clearInterval(intervalId);
  intervalId = null;
  timer = 0;
  chrome.storage.local.set({ timer: timer });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'start') {
    startTimer();
  } else if (request.command === 'stop') {
    stopTimer();
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get('timer', (data) => {
    timer = data.timer || 0;
    if (timer > 0) {
      startTimer();
    }
  });
});
