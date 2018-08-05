//

startRendering(20);
startRendering(35);

function startRendering(duration) {
  console.log(`Start video rendering.`);
  if (duration < 30) {
    alertInProgress();
  } else {
    alertCompleted();
  }

  function alertInProgress() {
    console.log("In Progress!");
  }

  function alertCompleted() {
    console.log("Completed!");
  }
}

alertInProgress();
