var videoContainerSizes = {
  sm: {
    height: 320,
    width: 480,
  },
  lg: {
    height: 720,
    width: 1080,
  },
};

$("#share-screen").click(async () => {
  await join();

  $("#resize-video-container").attr("disabled", false);
});

$("#resize-video-container").click(() => {
  const videoContainer = $(`#video-player-container`);
  const sizeVariant = videoContainer.attr("data-size-variant");

  if (sizeVariant === "sm") {
    const sizes = videoContainerSizes["lg"];

    videoContainer.css("width", sizes.width);
    videoContainer.css("height", sizes.height);
    videoContainer.attr("data-size-variant", "lg");
  } else {
    const sizes = videoContainerSizes["sm"];

    videoContainer.css("width", sizes.width);
    videoContainer.css("height", sizes.height);
    videoContainer.attr("data-size-variant", "sm");
  }
});

async function join() {
  const captureStream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: false,
  });

  const [video] = $("#video-player");
  video.srcObject = captureStream;
}
