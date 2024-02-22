function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60Issri5klv":
        Script1();
        break;
      case "5jbqTUM0j6c":
        Script2();
        break;
      case "6K4Kf3DZ90h":
        Script3();
        break;
      case "6AB9Jl2dByt":
        Script4();
        break;
      case "67v0YrFnFQk":
        Script5();
        break;
      case "6hwCBiTtVWy":
        Script6();
        break;
      case "600NSa3CQLq":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src = "musik.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong')
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong')
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong')
audio.volume = 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong')
audio.volume = 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong')
audio.volume = 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong')
audio.volume = 1.0;
}

