startRendering(20, alertInProgress, alertCompleted);
startRendering(35, alertInProgress, alertCompleted);

function startRendering(duration, callback1, callback2) {
  console.log(`Start video rendering.`);
  if (duration < 30) {
    callback1();
  } else {
    callback2();
  }
}

function alertInProgress() {
  console.log("In Progress!");
}

function alertCompleted() {
  console.log("Completed!");
}
