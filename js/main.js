(() => {
  console.log("JS is connected");

  let audioFile = document.querySelector('audio'),
      pauseButton = document.querySelector("#pause"),
      playButton = document.querySelector("#play"),
      loadMoreButton = document.querySelector("#loadmore");

  function pauseAction(){
    audioFile.pause();
  }

  function playAudio(){
    audioFile.play();
  }

  function longEnded(){
    console.log("done!");
  }

  function loadAudioTrack(){
    audioFile.src = "audio/STP_Interstate_Love_Song.mp3";
    audioFile.load();
    audioFile.play();
  }

  audioFile.addEventListener("ended", longEnded);
  pauseButton.addEventListener("click", pauseAction);
  playButton.addEventListener("click", playAudio);
  loadMoreButton.addEventListener("click", loadAudioTrack);
})();
