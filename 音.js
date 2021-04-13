

function ring(){
  document.getElementById("tts").load();
  document.getElementById("tts").play();
};

function stop(){
  document.getElementById("tts").pause();
  document.getElementById("ttd").load();
  document.getElementById("ttd").play();
}

function da1(){
document.getElementById("da1").pause();
document.getElementById("da2").load();
document.getElementById("da2").play();
}

function da2(){
document.getElementById("da2").pause();
document.getElementById("da1").load();
document.getElementById("da2").play();
}
