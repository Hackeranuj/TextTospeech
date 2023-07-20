// const convertBtn = document.getElementById("convertBtn");
// const inputtext = document.getElementById("inputtext");
// const audioPlayer = document.getElementById("audioPlayer");

      
// convertBtn.addEventListener("click", () => {
//     const text = inputText.value.trim();
//     if(text !== ""){
//         textToSpeech(text);
//     }
// });

// function textToSpeech(text) {
//     var audioPlayer = new Audio();
//     audioPlayer.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(text)}`;
//     audioPlayer.play();
//   }
  


const convertBtn = document.getElementById("convertBtn");
const inputText = document.getElementById("inputtext");
const audioPlayer = document.getElementById("audioPlayer");

convertBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text !== "") {
    textToSpeech(text);
  }
});

function textToSpeech(text) {
  var audio = new Audio();
  audio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(text)}`;
  audio.play();
}
